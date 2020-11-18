<template>
    <div class="song-listitem">
        <ul class="song-list">
            <li class="item" v-for="value in newsongs" :key="value.id" @click="selectMusic(value.id)">
                <!-- <img :src="value.picUrl"> -->
                <img v-lazy="value.picUrl">
                <div class="song-title">
                    <h3>{{value.name}}</h3>
                    <p>{{value.singer}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"SongListItem",
    props:{
        newsongs:{
            type: Array,
            default: () => [],
            required: true,
        }
    },
    methods: {
    ...mapActions([
      'setFullScreen',
      'setSongDetail'
    ]),
    selectMusic (id) {
      this.setFullScreen(true)
      let audioObj = document.querySelector('audio');
      audioObj.play();
      this.setSongDetail([id])
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
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
                    width: 70%;
                    h3 {
                    @include font_size($font_medium);
                    @include font_color();
                    @include no-wrap();
                }
                    p {
                    @include font_size($font_samll);
                    @include font_color();
                    @include no-wrap();
                    margin-top: 10px;
                    opacity: 0.6;
                    }
                }   
            }
        }
</style>