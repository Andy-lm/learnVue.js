<template>
    <div class="song">
        <div class="song-top"><h3>最新音乐</h3></div>
        <ul class="song-list">
            <li class="item" v-for="value in newsongs" :key="value.id" @click="selectMusic">
                <!-- <img :src="value.picUrl"> -->
                <img v-lazy="value.picUrl">
                <div class="song-title">
                    <h3>{{value.name}}</h3>
                    <p>{{value.song.artists[0].name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name:"NewSong",
    methods:{
        ...mapActions([
            'setFullScreen'
        ]),
        selectMusic(){
            this.setFullScreen(true);
        }
    },
    props:{
        newsongs:{
            type: Array,
            default: () => [],
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
    .song {
        .song-top {
            width: 100%;
            height: 84px;
            line-height: 84px;
            @include bg_sub_color();
            padding: 0 20px;
            border-bottom: 1px solid #cccccc;
            border-top: 1px solid #cccccc;
            h3 {
                @include font_size($font_large);
                font-weight: bold;
                @include font_color();
            }
        }
        .song-list {
            width: 100%;
            // height: 200px;
            overflow: hidden;
            .item {
                @include bg_sub_color();
                padding: 20px 20px;
                display: flex;
                align-items: center; // 设置侧轴上的元素排列方式
                border-bottom: 1px solid #cccccc;
                img {
                    width: 120px;
                    height: 120px;
                    border-radius: 20px;
                }
                .song-title {
                    margin-left: 50px;
                    h3 {
                    @include font_size($font_medium);
                    @include font_color();
                }
                    p {
                    @include font_size($font_samll);
                    @include font_color();
                    margin-top: 10px;
                    opacity: 0.6;
                    }
                }   
                
            }
        }
    }
</style>