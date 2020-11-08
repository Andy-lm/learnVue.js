<template>
    <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="cd">
        <div class="cd-container" ref="cdContainer">
            <img :src="currentSong.picUrl" alt="">
        </div>
        <p><< 右滑查看歌词 <<</p>
    </swiper-slide>
    <swiper-slide class="lyric" ref="lyric">
        <ScrollView ref="scrollView">
            <ul>
                <li v-for="(value,key) in currentLyric" :key="key" :class="{'active':key === currentLineNum}">{{value}}</li>                
            </ul>
        </ScrollView>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide} from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import ScrollView from '../ScrollView'
import {mapGetters} from 'vuex'
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
        swiper,
        swiperSlide,
        ScrollView
    },
    methods:{
        // getFirstLyric(){
        //     for(let k in this.currentLyric) {
        //         return this.currentLyric[k]
        //     }
        // },
        getActiveLineNum(lineNum){
            if(lineNum < 0) {
                return this.currentLineNum;
            }
            let result = this.currentLyric[lineNum + ''];
            if(result === undefined || result === '') {
                lineNum--;
                return this.getActiveLineNum(lineNum);
            }else {
                return lineNum + '';
            }
        }
    },
    computed:{
        ...mapGetters([
            'isPlaying',
            'currentSong',
            'currentLyric'
        ])
    },
    watch:{
        isPlaying(newValue,oldValue){
            if(newValue){
                this.$refs.cdContainer.classList.add('active');
            }else {
                this.$refs.cdContainer.classList.remove('active');
            }
        },
        // 处理歌词同步
        currentTime(newValue,oldValue){ 
            /*
            // 歌词高亮同步
            let lineNum = Math.floor(newValue) + '';
            let result = this.currentLyric[lineNum];
             
            
            if(result !== undefined && result !== '') {
                this.currentLineNum = lineNum;
                    // 歌词滚动同步
                    // 歌词距离容器顶部的高度
                if(document.querySelector('li.active') !== null) {
                    let currentLyricTop = document.querySelector('li.active').offsetTop
                    // console.log(currentLyricTop);
                    // 容器的高度
                    let lyricHeight = this.$refs.lyric.$el.offsetHeight;
                    if(currentLyricTop >= lyricHeight/2) {
                    // console.log('开始滚动');
                    this.$refs.scrollView.scrollTo(0,lyricHeight/2 - currentLyricTop,100);
                    }
                }
            }  
             */
            let lineNum = Math.floor(newValue);
            this.currentLineNum = this.getActiveLineNum(lineNum);
            if(document.querySelector('li.active') !== null) {
                let currentLyricTop = document.querySelector('li.active').offsetTop
                // console.log(document.querySelector('li.active'));
                // console.log(currentLyricTop);
                // 容器的高度
                let lyricHeight = this.$refs.lyric.$el.offsetHeight;
                if(currentLyricTop >= lyricHeight/2) {
                // console.log('开始滚动');
                this.$refs.scrollView.scrollTo(0,lyricHeight/2 - currentLyricTop,100);
                }else {
                    this.$refs.scrollView.scrollTo(0,0,100);
                }
            }
        },
        // 处理默认歌词索引不是0的问题
        currentLyric(newValue,oldValue){
            for(let k in newValue) {
                this.currentLineNum = k
                return
            }
        },
    },
    props:{
        currentTime:{
            type:Number,
            default:0,
            required:true
        }
    }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.banner {
    // 直接用定位确定了iscorll的容器高度
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
        animation: sport 6s linear infinite;
        animation-play-state: paused;
        &.active {
            animation-play-state: running;
        }
        img {
            width: 100%;
            height: 100%;
        }
        }
        p {
            text-align: center;
            @include font_size($font_medium);
            // @include font_color();
            color: #fff;
            margin-top: 100px;
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
                // color: #fff;
                @include font_active_color();
            }
        }
    }
    
}
@keyframes sport {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
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
