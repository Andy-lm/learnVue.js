<template>
    <div class="player">
        <NormalPlayer :totalTime="totalTime" :currentTime="currentTime"></NormalPlayer>
        <MiniPlayer></MiniPlayer>
        <ListPlayer ref="listPlayer"></ListPlayer>
        <audio :src="currentSong.url" ref="audio" @timeupdate="timeupdate" @ended="end"></audio>
    </div>
</template>

<script>
import NormalPlayer from "../components/Player/NormalPlayer"
import MiniPlayer from "../components/Player/MiniPlayer"
import ListPlayer from "../components/Player/ListPlayer"
import {mapGetters,mapActions} from "vuex"
import mode from "../store/modeType"
import {getRandomIntInclusive,setLocalStorage,getLocalStorage} from "../tools/tools"
export default {
    name:"Player",
    components:{
        NormalPlayer,
        MiniPlayer,
        ListPlayer
    },
    computed:{
        ...mapGetters([
            "currentSong",
            'isPlaying',
            'currentIndex',
            'curTime',
            'modeType',
            'songs',
            'favoriteList',
            'historyList'
        ])
    },
    methods:{
        ...mapActions([
            'setCurrentIndex',
            'setFavoriteList',
            'setHistorySong',
            'setHistoryList'
        ]),
        timeupdate(e){
            this.currentTime = e.target.currentTime;
        },
        end(){
            // 当歌曲播放完成后执行这个函数
            if(this.modeType === mode.loop) {
                this.setCurrentIndex(this.currentIndex + 1);
            } else if(this.modeType === mode.one){
                this.$refs.audio.play();
            }else if(this.modeType === mode.random) {
                let index = getRandomIntInclusive(0,this.songs.length - 1);
                this.setCurrentIndex(index);
            }
        },
        
    },
    watch:{
        isPlaying(newValue,oldValue){
            if(newValue){
                this.setHistorySong(this.currentSong);
                this.$refs.audio.play();
            }else {
                this.$refs.audio.pause();
            }
        },
        currentIndex(){
            this.$refs.audio.oncanplay = () => {
                this.totalTime = this.$refs.audio.duration;
                if(this.isPlaying) {
                    this.setHistorySong(this.currentSong);
                    this.$refs.audio.play();
                }else {
                    this.$refs.audio.pause();
                }
            }
        },
        curTime(newValue,oldValue){
            this.$refs.audio.currentTime = newValue;
        },
        favoriteList(newValue,oldValue){
            // 当favoriteList一变化我们将其储在本地
            // window.localStorage.setItem('favoriteList',JSON.stringify(newValue));
            setLocalStorage('favoriteList',newValue);
        },
        historyList(newValue,oldValue){
            // window.localStorage.setItem('historyList',JSON.stringify(newValue));
            setLocalStorage('historyList',newValue);
        }
    },
    created(){
        // 读取数据赋值到我们的state中
        // let favoriteList =  JSON.parse(window.localStorage.getItem('favoriteList'));
        let favoriteList = getLocalStorage('favoriteList');
        if(favoriteList === null) return;
        this.setFavoriteList(favoriteList);

        // let historyList =  JSON.parse(window.localStorage.getItem('historyList'));
        let historyList = getLocalStorage('historyList');
        if(historyList === null) return;
        this.setHistoryList(historyList);
    },
    mounted(){
        this.$refs.audio.oncanplay = () => {
            this.totalTime = this.$refs.audio.duration
        }
    },
    data(){
        return {
            totalTime:0,
            currentTime:0
        }
    }
}
</script>

<style scoped lang="scss">
</style>