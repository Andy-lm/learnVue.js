<template>
    <!-- <div class="normal-player" v-show="this.$store.getters.isFullScreen"> -->
        <transition 
        @enter="enter" 
        @leave="leave" 
        :css="false">
        <div class="normal-player" v-show="this.isFullScreen">
        <div class="player-container">
            <PlayerHeader></PlayerHeader>
            <PlayerMiddle></PlayerMiddle>
            <PlayerBottom></PlayerBottom>
        </div>
        <div class="player-bg">
            <img src="../../assets/images/fox.jpg" alt="">
            <div class="bg-mask"></div>
        </div>
        </div>
        </transition>
</template>

<script>
import PlayerHeader from "./PlayerHeader"
import PlayerMiddle from "./PlalyerMiddle"
import PlayerBottom from "./PlayerBottom"
import {mapGetters} from "vuex"
import Velocity from "velocity-animate"
import "velocity-animate/velocity.ui"
export default {
    name:"NormalPlayer",
    methods:{
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
            'isFullScreen'
        ])
    },
    components:{
        PlayerHeader,
        PlayerMiddle,
        PlayerBottom
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