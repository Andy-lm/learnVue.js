<template>
    <div class="singer">
        <div class="singer-container">
            <ScrollView ref="scrollView">
            <ul class="list-container">
                <li class="list-group" v-for="(value,index) in list" :key="index" ref="group">
                    <h2 class="group-title">{{keys[index]}}</h2>
                    <ul>
                        <li class="group-item" v-for="(obj) in list[index]" :key="obj.id" @click.stop="switchSinger(obj.id)">
                            <img v-lazy="obj.img1v1Url" alt="">
                            <p>{{obj.name}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
            </ScrollView>
            <ul class="list-keys">
            <!-- <li v-for="(key,index) in keys" :key="key" @click.stop="keyDown(index)" :class="{'active':currentIndex === index}">{{key}}</li> -->
                <li v-for="(key,index) in keys" 
                :key="key" 
                :data-index="index"
                @touchstart.stop.prevent="touchstart"
                @touchmove.stop.prevent="touchmove"
                :class="{'active-key':currentIndex === index}">{{key}}</li>
            </ul>
            <div class="fix-title" v-show="fixTitle !== ''" ref="fixTitle">{{fixTitle}}</div>
        </div>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
// import {getHotArtist} from "../api/index"
// import {getLetterArtist} from "../api/index"
import ScrollView from "../components/ScrollView"
import {getAllArtist} from "../api/index"
// import MetaInfo from "../../vue-meta-info"
export default {
    name:'Singer',
    // metaInfo:MetaInfo.singer,
    created(){
        getAllArtist().then((result) => {
            this.keys = result.keys;
            this.list = result.list;
        }).catch(function(err){
            console.log(err);
        })
    },
    components:{
        ScrollView
    },
    methods:{
        _keyDown(index){
            // console.log(index);
            this.currentIndex = index;
            let offsetY = this.groupsTop[index];
            this.$refs.scrollView.scrollTo(0,-offsetY);
        },
        touchstart(e){
            let index = parseInt(e.target.dataset.index);
            this._keyDown(index);
            this.beginOffsetY = e.touches[0].pageY;
        },
        touchmove(e){
            this.moveOffsetY = e.touches[0].pageY;
            let offsetY = (this.moveOffsetY - this.beginOffsetY) / e.target.offsetHeight;
            let index = parseInt(e.target.dataset.index) + Math.floor(offsetY);
            if(index < 0) {
                index = 0;
            }else if(index > this.keys.length - 1){
                index = this.keys.length - 1;
            }
            this._keyDown(index);
        },
        switchSinger(id){
            this.$router.push(`/singer/detail/${id}/singer`);
        }
    },
    data(){
        return {
            keys:[],
            list:[],
            groupsTop:[],
            currentIndex:0,
            beginOffsetY:0,
            moveOffsetY:0,
            scrollY:0
        }
    },
    computed:{
        fixTitle(){
            if(this.scrollY >= 0) {
                return ''
            }else {
                return this.keys[this.currentIndex];
            }
        }
    },
    mounted(){
        this.$refs.scrollView.scrolling((y) =>{
            this.scrollY = y
            if(y >= 0) {
                this.currentIndex = 0;
                return
            }
            for(let i = 0; i<this.groupsTop.length - 1;i++) {
                let preTop = this.groupsTop[i];
                let nextTop = this.groupsTop[i+1];
                if(-y >= preTop && -y <= nextTop) {
                    this.currentIndex = i;
                    // 下一组标题的偏移位-滚出去的距离
                    let diffOffsetY = nextTop + y;
                    let fixTitleOffsetY = 0;
                    if(diffOffsetY >= 0 && diffOffsetY <= this.fixTitleHeight){
                        fixTitleOffsetY = diffOffsetY - this.fixTitleHeight;
                    }else {
                        fixTitleOffsetY = 0;
                    }
                    // 这一次计算的值等于上一次计算的值
                    if(fixTitleOffsetY === this.fixTitleOffsetY) {
                        return
                    }
                    this.fixTitleOffsetY =  fixTitleOffsetY;
                    this.$refs.fixTitle.style.transform = `translateY(${fixTitleOffsetY}px)`
                    return
                }
            }
            this.currentIndex = this.groupsTop.length - 1;
        })
    },
    watch:{
        // 注意watch是用来监听数据的变化的，而当数据变化的时候未必代表数据已经渲染到了界面上
        list(){
            this.$nextTick(() => {
                // console.log(this.$refs.group);
                this.$refs.group.forEach((group) =>{
                    this.groupsTop.push(group.offsetTop);
                })
            })
        },
        fixTitle(){
            this.$nextTick(()=> {
                this.fixTitleHeight = this.$refs.fixTitle.offsetHeight;
            })
        }
    },
    
}
</script>

<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
.singer {
    width: 100%;
    height: 100%;
    .singer-container {
        position: fixed;
        top: 184px;
        left: 0;
        right: 0;
        bottom: 0;
        // background-color: chartreuse;
        overflow: hidden;
        @include bg_sub_color();
        .list-container {
        // width: 100%;
        // height: 100%;
        .list-group {
            .group-title {
                @include bg_color();
                @include font_size($font_medium);
                color: #ffffff;
                padding: 10px 20px;
                box-sizing: border-box;
            }
            .group-item {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 10px 20px;
                border-bottom: 1px solid #cccccc;
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    overflow: hidden;
                    }
                p {
                    @include font_size($font_medium);
                    @include font_color();
                    display: flex;
                    justify-content: center;
                    margin-left: 20px;
                }
            }
        }
    }
        .list-keys {
        position: fixed;
        right: 10px;
        top: 60%;
        transform: translateY(-50%);
        li {
            @include font_color();
            @include font_size($font_medium_s);
            padding: 3px 0;
            &.active-key{
                text-shadow: 0 0 10px #000;
            }
        }
        }
        .fix-title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 10px 20px;
        box-sizing: border-box;
        @include bg_color();
        @include font_size($font_medium);
        color: #ffffff;
        }
    }
    
    .v-enter {
            /* opacity指变化的程度 */
            transform: translateX(100%);
        }

    .v-enter-to {
        transform: translateX(0%);
    }

    .v-enter-active {
        transition: transform 0.3s linear;
    }

    .v-leave {
        transform: translateX(0%)
    }

    .v-leave-to {
        transform: translateX(100%);
    }

    .v-leave-active {
        transition: transform 0.3s linear;
    }
}
</style>