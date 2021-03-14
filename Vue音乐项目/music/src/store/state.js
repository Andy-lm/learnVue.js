import mode from "./modeType"
export default {
    isFullScreen:false,
    isShowMiniPlayer:false,
    isShowListPlayer:false,
    isPlaying: false,
    modeType: mode.loop,
    // 用来保存当前专辑里的所有歌曲，包括歌曲的信息与具体的URL
    songs: [],
    currentSong: {},
    currentIndex: 0,
    currentLyric:{},
    curTime:0,
    favoriteList:[],
    historyList: [],
    isShowSelect:false
}