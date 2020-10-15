<template>
    <transition 
        @enter="enter" 
        @leave="leave" 
        :css="false">
    <div class="mini-player" v-show="this.isShowMiniPlayer">
        <div class="player-container">
            <div class="player-left" @click="showNormalPlayer">
                <img src="../../assets/images/fox.jpg" alt="">
                <div class="player-title">
                    <h3>演员</h3>
                    <p>薛之谦</p>
                </div>
            </div>
            <div class="player-right">
                <div class="play" @click="play" ref="play"></div>
                <div class="list" @click="showList"></div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import Velocity from "velocity-animate"
import "velocity-animate/velocity.ui"
import {mapActions,mapGetters} from "vuex";
export default {
    name:"MiniPlayer",
    methods:{
        ...mapActions([
            'setFullScreen',
            'setMiniPlayer',
            'setIsPlaying'
        ]),
        showList() {
            this.$emit('showList');
        },
        showNormalPlayer(){
            this.setFullScreen(true);
            this.setMiniPlayer(false);
        },
        enter(el,done){
            Velocity(el, 'transition.slideUpBigIn', { duration: 500 },function(){
                done();
            })
        },
        leave(el,done){
            Velocity(el, 'transition.slideDownBigOut', { duration: 500 },function(){
                done();
            })
        },
        play(){
            this.setIsPlaying(!this.isPlaying);
        }
    },
    computed:{
        ...mapGetters([
            'isShowMiniPlayer',
            'isPlaying'
        ])
    },
    watch:{
        isPlaying(newValue,oldValue){
            if(newValue){
                this.$refs.play.classList.add('active');
            }else {
                this.$refs.play.classList.remove('active');
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
    .mini-player {
        position: fixed;
        width: 100%;
        height: 150px;
        left: 0;
        bottom: 0;
        .player-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            @include bg_color();
            .player-left {
                padding-left: 30px;
                display: flex;
                align-items: center;
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-right: 20px;
                }
                .player-title {
                    text-align: center;
                    h3 {
                        @include font_size($font_medium);
                        @include font_color();
                    }
                    p {
                       @include font_size($font_medium_s);
                       @include font_color(); 
                    }
                }
            }
            .player-right {
                display: flex;
                align-items: center;
                .play {
                    width: 84px;
                    height: 84px;
                    @include bg_img("../../assets/images/pause");
                    &.active{
                        @include bg_img("../../assets/images/play");
                    }
                }
                .list {
                    width: 120px;
                    height: 120px;
                    @include bg_img("../../assets/images/list");
                }
            }
        }
    }
</style>