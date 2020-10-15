<template>
    <!-- v-if="banners.length > 0"解决swiper轮播到最后一张不轮播的问题 -->
    <!-- <swiper :options="swiperOption" class="banner" v-if="banners.length > 0"> -->
    <!-- <swiper-slide v-for="value in banners" :key="value.bannerId" class="item"> -->
      <!-- <a :href="value.url"> -->
        <!-- <img :src="value.pic" alt=""> -->
      <!-- </a> -->
    <!-- </swiper-slide> -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
  <!-- </swiper> -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false" @change="onChange">
    <van-swipe-item v-for="value in banners" :key="value.bannerId" class="item">
        <a :href="value.url">
            <img :src="value.pic">
        </a>
    </van-swipe-item>
    <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/10
    </div>
    </template>
</van-swipe>
    
</template>

<script>
// import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    name:'Banner',
    data:function() {
        return {
            current: 0,
        //     swiperOption: {
        //     loop: true, // 循环模式选项
        //     autoplay: {
        //         delay: 1000, // 自动切换的时间间隔，单位ms
        //         stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
        //         disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
        //     },
        //     // 如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination'
        //     },
        //     observer: true,
        //     observeParents: true,
        //     observeSlideChildren: true
        // }
        }
    },
    props:{
        banners:{
            type: Array,
            default: () => [],
            required: true,
        }
    },
    methods:{
        onChange(index) {
            this.current = index;
        },
    }
    // components: {
    //     Swiper,
    //     SwiperSlide
    // },
}
</script>

<style scoped lang="scss">
    
    // .banner {
    //     .item {
    //         img {
    //             width: 100%;
    //             height: 300px;
    //         }
    //     }
    // }
</style>
<style lang="scss">
    @import "../../assets/css/mixin";
    .my-swipe {
        .item {
            img {
                width: 100%;
                height: 300px;
            }
        }
    }
    .custom-indicator {
        position: absolute;
        // color:wheat;
        // @include font_color();
        // color: white;
        @include font_active_color();
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 30px;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.3);
    }
    
//   @import "../assets/css/mixin";
//   /*注意点: 如果想覆盖swiper的样式, 那么style标签不能是scoped的, 否则无法覆盖*/
//  .banner{
//   .swiper-pagination-bullet{
//     width: 16px;
//     height: 16px;
//     background: #fff;
//     opacity: 1;
//   }
//   .swiper-pagination-bullet-active{
//     @include bg_color();
//     /*background: #f00;*/
//   }
// }
    // .my-swipe {
    //     .van-swipe-item {
    //     color: #fff;
    //     font-size: 20px;
    //     line-height: 150px;
    //     text-align: center;
    //     background-color: #39a9ed;
    // }
    // }
</style>