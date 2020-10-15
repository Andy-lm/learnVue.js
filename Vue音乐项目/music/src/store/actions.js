import {SET_FULL_SCREEN,SET_MINI_PLAYER,SET_IS_PLAYING} from "./mutations-type";
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
    setIsPlaying({commit},flag) {
        commit('SET_IS_PLAYING', flag);
    }
}