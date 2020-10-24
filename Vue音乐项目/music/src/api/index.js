// import { Promise } from 'core-js';
import Network from './network';

export const getBanner = () => Network.get('banner?type=2');
export const getPersonalized = () => Network.get('personalized?limit=6');
export const getNewAlbum = () => Network.get('/album/newest');
export const getNewSong = () => Network.get('/personalized/newsong');
export const getPlayList = (data) => Network.get('/playlist/detail', data);
export const getAlbum = (data) => Network.get('/album', data);
export const getSongDetail = (data) => Network.get('song/detail',data);
export const getSongLyrics = (data) => Network.get('lyric', data);
export const getSongURL = (data) => Network.get('/song/url', data);
export const getArtistsSongs = (data) => Network.get('artists', data);
// export const getHotArtist = () => Network.get('/top/artists?offset=0&limit=5');
export const getHotArtist = () => {
    return new Promise(function (resolve,reject) {
        Network.get('/top/artists?offset=0&limit=5').then(function (result) {
            resolve(result.artists);
        }).catch(function (err) {
            reject(err);
        })
    })
}

export const getLetterArtist = (letter) => { 
    return new Promise(function (resolve, reject) {
        let letterArtists = [];
        Network.all([
            // Network.get(`artist/list?offset=0&limit=5&cat=1001&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=1002&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=1003&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=2001&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=2002&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=2003&initial=${letter}`),
            Network.get(`/artist/list?offset=0&limit=5&type=1&area=7&initial=${letter}`),
            Network.get(`/artist/list?offset=0&limit=5&type=2&area=7&initial=${letter}`),
            Network.get(`/artist/list?offset=0&limit=5&type=3&area=7&initial=${letter}`)
        ]).then(function (result) {
            // console.log(result);
            result.forEach(function (item) {
                letterArtists.push(...item.artists);
            })
            resolve(letterArtists);
        }).catch(function (err) {
            // console.log(err);
            reject(err);
        })
    })
}

export const getAllArtist = () => { 
    return new Promise(function (resolve,reject) {
        // let keys = ['热']
        let keys = [];
        // console.log(getHotArtist());
        // let list = [getHotArtist()];
        let list = [];
        for (let i = 65; i < 91; i++) {
            let char = String.fromCharCode(i);
            keys.push(char);
            list.push(getLetterArtist(char));
            // console.log(getLetterArtist(char));
        }
        Network.all(list).then(function (result) {
            // console.log(result);
            // axios.all可以接收多个Promise对象，当其全部为resolve时all方法中获得结果
            let obj = {};
            obj.keys = keys;
            obj.list = result;
            resolve(obj);
        }).catch(function (err) {
            reject(err);
        })
    })
    
}

export const getTopListDetail = () => {
    return new Promise(function (resolve, reject) {
      let category = {
        officialList: [
          { name: '云音乐飙升榜', id: 3 },
          { name: '云音乐新歌榜', id: 0 },
          { name: '网易原创歌曲榜', id: 2 },
          { name: '云音乐热歌榜', id: 1 }
        ],
        recList: [
          { name: '云音乐说唱榜', id: 23 },
          { name: '云音乐电音榜', id: 25 },
          { name: '云音乐欧美新歌榜', id: 32 },
          { name: '抖音排行榜', id: 26 },
          { name: '云音乐ACG音乐榜', id: 22 },
          { name: '云音乐古典音乐榜', id: 24 }
        ],
        globalList: [
          { name: '美国Billboard周榜', id: 6 },
          { name: 'UK排行榜周榜', id: 5 },
          // { name: 'Beatport全球电子舞曲榜', id: 21 },
          // { name: '日本Oricon周榜', id: 10 },
          { name: 'iTunes榜', id: 8 },
          // { name: '英国Q杂志中文版周榜', id: 29 }
        ],
        otherList: [
          { name: 'KTV唛榜', id: 7 },
          { name: '法国 NRJ Vos Hits 周榜', id: 19 },
          { name: '新声榜', id: 27 },
          { name: '云音乐韩语榜', id: 28 },
          { name: '电竞音乐榜', id: 30 },
          { name: '云音乐欧美热歌榜', id: 31 }
        ],
        titles: { officialList: '官方榜', recList: '推荐榜', globalList: '全球榜', otherList: '更多榜单' }
      }
      Network.get('toplist/detail')
        .then(function (data) {
          console.log(data);
          data.list.forEach(function (obj) {
            let flag = false
            for (let key in category) {
              for (let i = 0; i < category[key].length; i++) {
                if (category[key][i].name === obj.name) {
                  category[key][i].rank = obj
                  category[key][i].id = obj.id
                  flag = true
                  break
                }
              }
              if (flag) {
                break
              }
            }
          })
          resolve(category)
        })
        .catch(function (err) {
          reject(err)
        })
    })
}

export const getSearchList = (data) => Network.get('search?type=1', data);
export const getSearchHot = () => Network.get('/search/hot');
