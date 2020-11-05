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
            'setFullScreen',
            'setMiniPlayer',
            'setIsPlaying',
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
        currentSong(newValue,oldValue){
            // console.log(newValue);
            if(newValue.name === ''){
                console.log('该歌曲无法播放，请切换其他歌曲。');
                this.setFullScreen(false);
                this.setMiniPlayer(false);
                this.$refs.audio.pause();
                return
            }
            this.$refs.audio.ondurationchange = () => {
                // console.log('currentSong变化1');
                this.totalTime = this.$refs.audio.duration;
                this.setHistorySong(this.currentSong);
                this.setIsPlaying(true);
                this.$refs.audio.play();
            }
            // console.log('currentSong变化2');
        },
        isPlaying(newValue,oldValue){
            if(newValue){
                // console.log('play()');
                this.setHistorySong(this.currentSong);
                this.$refs.audio.play();
            }else {
                // console.log('pause()');
                this.$refs.audio.pause();
            }
        },
        currentIndex(){
            // oncanplay在歌曲加载完执行
            // 因为对于iPhone手机其默认是没有预加载的，所以当我们监听oncanplay时是永远无法触发的
            // 所以最终的解决办法就是使用ondurationchange替代
            // this.$refs.audio.oncanplay = () => {
            this.$refs.audio.ondurationchange = () => {
                // currentIndex变化了
                // console.log('currentIndex变化了');
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
        // this.$refs.audio.oncanplay = () => {
            this.$refs.audio.ondurationchange = () => {
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