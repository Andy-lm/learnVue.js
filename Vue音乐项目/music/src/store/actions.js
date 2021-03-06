import {
    SET_FULL_SCREEN,
    SET_MINI_PLAYER,
    SET_LIST_PLAYER,
    SET_IS_PLAYING,
    SET_MODE_TYPE,
    SET_SONG_DETAIL,
    SET_SONG_LYRIC,
    SET_DEL_SONG,
    SET_CURRENT_INDEX,
    SET_CURRENT_TIME,
    SET_FAVORITE_SONG,
    SET_FAVORITE_LIST,
    SET_HISTORY_LIST,
    SET_HISTORY_SONG,
    SET_SHOW_SELECT,
    SET_INITIAL_CURRENT_INDEX
} from "./mutations-type";
import { getSongDetail,getSongLyrics,getSongURL } from "../api/index"
export default {
    // setFullScreen({commit},flag) {
    //     commit('changeFullScreen', flag);
    // }
    setFullScreen({commit},flag) {
        commit('SET_FULL_SCREEN', flag);
    },
    setMiniPlayer({commit},flag) {
        commit('SET_MINI_PLAYER', flag);
    },
    setListPlayer({commit},flag) {
        commit('SET_LIST_PLAYER', flag);
    },
    setIsPlaying({commit},flag) {
        commit('SET_IS_PLAYING', flag);
    },
    setModeType({commit},flag) {
        commit('SET_MODE_TYPE', flag);
    },
    // 可以接受一个id或者多个id将歌曲的细节内容放入对象，填充到数组中
    // 然后通过调用currentIndex方法来切换歌曲
    async setSongDetail({ commit }, ids) {
        let result = await getSongDetail({ ids: ids.join(',') });
        let urls = await getSongURL({ id: ids.join(',') });
        // console.log(urls);
        let list = [];
        result.songs.forEach((value,i) => {
            let obj = {};
            obj.name = value.name;
            for (let j = 0; j < urls.data.length; j++) {
                let item = urls.data[j];
                if (item.id === value.id) {
                    obj.url = item.url;
                    break;
                }
            }
            let singer = '';
            value['ar'].forEach(function (item, index) {
                if (index === 0) {
                    singer = item.name;
                } else {
                    singer += '-'+item.name;
                }
            })
            obj.id = value.id;
            obj.singer = singer;
            obj.picUrl = value['al'].picUrl;
            if (obj.url === null) {
                return true
            }
            list.push(obj);
        });
        // console.log(list);
        commit('SET_SONG_DETAIL', list);
    },
    async getSongLyric({ commit }, id) {
        let result = await getSongLyrics({id:id})
        // console.log(result);
        // if (result.lrc === undefined) {
        //     result.lrc.lyric = '[00:01.000] 无歌词'
        //     console.log(111);
        // }
        // console.log(result);
        if (result.lrc === undefined) {
            let obj = {
                lyric: '[00:01.000] 无歌词'
            }
            result.lrc = obj;
        }
        // console.log(result.lrc === undefined);
        // console.log(result);
        let obj = parseLyric(result.lrc.lyric);
        // console.log(obj);
        // console.log(obj);
        commit('SET_SONG_LYRIC', obj);
    },
    setDelSong({commit},index) {
        commit('SET_DEL_SONG', index);
    },
    setCurrentIndex({commit},index) {
        commit('SET_CURRENT_INDEX', index);
    },
    setCurrentTime({commit},time) {
        commit('SET_CURRENT_TIME', time);
    },
    setFavoriteSong({commit},song) {
        commit('SET_FAVORITE_SONG', song); 
    },
    setFavoriteList({commit},list) {
        commit('SET_FAVORITE_LIST', list); 
    },
    setHistorySong({commit},song) {
        commit('SET_HISTORY_SONG', song); 
    },
    setHistoryList({commit},song) {
        commit('SET_HISTORY_LIST', song); 
    },
    setShowSelect({commit},flag) {
        commit('SET_SHOW_SELECT', flag); 
    },
    setInitialCurrentIndex({commit},index) {
        commit('SET_INITIAL_CURRENT_INDEX', index); 
    }
}
// 格式化歌词的方法
function parseLyric (lrc) {
    let lyrics = lrc.split('\n')
    // [00:00.000] 作曲 : 林俊杰
    // 1.定义正则表达式提取[00:00.000]
    let reg1 = /\[\d*:\d*\.\d*\]/g
    // 2.定义正则表达式提取 [00
    let reg2 = /\[\d*/i
    // 3.定义正则表达式提取 :00
    let reg3 = /\:\d*/i
    // 4.定义对象保存处理好的歌词
    let lyricObj = {}
    lyrics.forEach(function (lyric) {
      // 1.提取时间
      let timeStr = lyric.match(reg1)
      if (!timeStr) { return }
      timeStr = timeStr[0]
      // 2.提取分钟
      let minStr = timeStr.match(reg2)[0].substr(1)
      // 3.提取秒钟
      let secondStr = timeStr.match(reg3)[0].substr(1)
      // 4.合并时间, 将分钟和秒钟都合并为秒钟
      let time = parseInt(minStr) * 60 + parseInt(secondStr)
      // 5.处理歌词
      let text = lyric.replace(reg1, '').trim()
      // 6.保存数据
      lyricObj[time] = text
    })
    return lyricObj
}