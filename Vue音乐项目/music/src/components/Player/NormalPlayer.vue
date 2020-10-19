<template>
    <!-- <div class="normal-player" v-show="this.$store.getters.isFullScreen"> -->
        <transition 
        @enter="enter" 
        @leave="leave" 
        :css="false">
        <div class="normal-player" v-show="this.isFullScreen">
        <div class="player-container">
            <PlayerHeader></PlayerHeader>
            <PlayerMiddle :currentTime="currentTime"></PlayerMiddle>
            <PlayerBottom :totalTime="totalTime" :currentTime="currentTime"></PlayerBottom>
        </div>
        <div class="player-bg">
            <img :src="currentSong.picUrl" alt="">
            <div class="bg-mask"></div>
        </div>
        </div>
        </transition>
</template>

<script>
import PlayerHeader from "./PlayerHeader"
import PlayerMiddle from "./PlalyerMiddle"
import PlayerBottom from "./PlayerBottom"
import {mapGetters,mapActions} from "vuex"
import Velocity from "velocity-animate"
import "velocity-animate/velocity.ui"
export default {
    name:"NormalPlayer",
    methods:{
        ...mapActions([
            'getSongLyric'
        ]),
        enter(el,done){
            Velocity(el, 'transition.slideRightIn', { duration: 500 },function(){
                done();
            })
        },
        leave(el,done){
            Velocity(el, 'transition.slideRightOut', { duration: 500 },function(){
                done();
            })
        }
    },
    computed:{
        // 辅助函数将store中的getter映射到局部的计算属性
        ...mapGetters([
            'isFullScreen',
            'currentSong'
        ])
    },
    watch:{
        currentSong(newValue,oldValue){
            // console.log(newValue.id);
            // 只要歌曲信息一变化，我们就获取歌曲详情中对应的id传递给我们的获取歌词的action方法
            // 由action方法发送请求获取歌词数据，然后保存到我们的state中
            if(newValue.id === undefined) {
                return
            }
            this.getSongLyric(newValue.id);
        }
    },
    components:{
        PlayerHeader,
        PlayerMiddle,
        PlayerBottom
    },
    props:{
        totalTime:{
            type:Number,
            default:0,
            require:true
        },
        currentTime:{
            type:Number,
            default:0,
            required:true
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
    .normal-player{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: blue;
        @include bg_sub_color();
        .player-container {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 999;
        }
        .player-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            
            .bg-mask {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 100;
                width: 100%;
                height: 100%;
                background-color: black;
                opacity: 0.8;
                }
            }
            img {
                z-index: -1;
                position: absolute;
                height: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                filter: blur(20px);
            }
    }
</style>