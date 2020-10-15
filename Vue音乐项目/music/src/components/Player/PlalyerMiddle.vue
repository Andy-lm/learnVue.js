<template>
    <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="cd">
        <div class="cd-container">
            <img src="../../assets/images/fox.jpg" alt="">
        </div>
        <p>带动啊啊啊啊啊啊啊啊啊啊</p>
    </swiper-slide>
    <swiper-slide class="lyric" ref="lyric">
        <ScrollView>
            <ul>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>dds</li>
                <li>fdsf</li>
                <li>sdf</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
            </ul>
        </ScrollView>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ScrollView from '../ScrollView'
export default {
    name:'PlayerMiddle',
      data () {
        return {
            swiperOption: {
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            clickable:true,
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active'
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true
            },
            currentLineNum: '0',
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ScrollView
    },
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.banner {
    position: fixed;
    top: 150px;
    bottom: 250px;
    left: 0;
    right: 0;
    .cd {
        .cd-container {
        overflow: hidden;
        margin: 0 auto;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border: 20px solid #ffffff;
        img {
            width: 100%;
            height: 100%;
        }
        }
        p {
            text-align: center;
            @include font_size($font_medium);
            @include font_color();
            margin-top: 50px;
        }
    }
    .lyric{
        li{
            text-align: center;
            @include font_size($font_medium);
            @include font_color();
            margin: 10px 0;
            &:last-of-type{
            padding-bottom: 50%;
            }     
            &.active{
                color: #fff;
            }
        }
    }
    
}
</style>
<style lang="scss">
  @import "../../assets/css/mixin";
.my-bullet{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  margin: 0 20px;
}
.my-bullet-active{
  width: 60px;
  @include bg_color();
}
</style>
