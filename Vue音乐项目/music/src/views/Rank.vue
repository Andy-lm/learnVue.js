<template>
    <div class="rank">
        <div class="rank-container">
            <ScrollView>
            <!-- <ul>
                <li v-for="(value, key) in category.list" :key="key">
                    <h3 class="group-title">{{value}}</h3>
                    <ul class="normal-group" v-if="value === '官方榜'">
                    <li v-for="obj in category[key]" :key="obj.rank.id" @click.stop="selectItem(obj.id)">
                        <div class="rank-left">
                            <img v-lazy="obj.rank.coverImgUrl" alt="">
                            <p>{{obj.rank.updateFrequency}}</p>
                        </div>
                        <div class="rank-right">
                            <p v-for="(song) in obj.rank.tracks" :key="song.first">{{song.first}}-{{song.second}}</p>
                        </div>
                    </li>
                    </ul>
                    <ul class="other-group"  v-if="value !== '官方榜'">
                        <li v-for="obj in category[key]" :key="obj.id" @click.stop="selectItem(obj.id)">
                        <div class="rank-top">
                        <img v-lazy="obj.rank.coverImgUrl" alt="">
                        <p>{{obj.rank.updateFrequency}}</p>
                        </div>
                        <div class="rank-bottom">
                        <p>{{obj.rank.name}}</p>
                        </div>
                        </li>
                    </ul>
                </li>
                <li class="bin" v-if="isShowMiniPlayer"></li>
            </ul> -->
            <ul class="xxxxx">
                <li class="official">
                    <div class="titele-wrap">
                        <h3 class="title">官方榜</h3>
                    </div>
                    <div class="official-wrap">
                        <li v-for="(item,index) in official" :key="index" 
                        class="music-item"
                        @click.stop="selectItem(item.id)">
                            <img v-lazy="item.coverImgUrl" alt="">
                            <!-- <p>{{item.description}} </p> -->
                        </li>
                    </div>
                </li>
                <li class="style">
                    <div class="titele-wrap">
                        <h3 class="title">曲风榜</h3>
                    </div>
                    <div class="style-wrap">
                        <li v-for="(item,index) in style" :key="index" class="music-item"
                        @click.stop="selectItem(item.id)">
                            <img v-lazy="item.coverImgUrl" alt="">
                            <p>{{item.description}} </p>
                        </li>
                    </div>
                </li>
                <li class="global">
                    <div class="titele-wrap">
                        <h3 class="title">全球榜</h3>
                    </div>
                    <div class="global-wrap">
                        <li v-for="(item,index) in global" :key="index" class="music-item" 
                        @click.stop="selectItem(item.id)">
                            <img v-lazy="item.coverImgUrl" alt="">
                            <p>{{item.description}} </p>
                        </li>
                    </div>
                </li>
                <li class="bin" v-if="isShowMiniPlayer"></li>
            </ul>
            </ScrollView>
        </div>        
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import {getTopListDetail} from "../api/index"
import ScrollView from "../components/ScrollView"
// import MetaInfo from "../../vue-meta-info"
import {mapGetters} from "vuex"
export default {
    name:'Rank',
    // metaInfo:MetaInfo.rank,
    components:{
        ScrollView
    },
    data(){
        return {
            category:{},
            official:[],
            style:[],
            global:[]
        }
    },
    computed:{
        ...mapGetters([
            'isShowMiniPlayer'
        ])
    },
    methods:{
        selectItem(id){
            this.$router.push(`/rank/detail/${id}/rank`);
        }
    },
    created(){
        getTopListDetail().then((data) =>{
            this.category = data;
            // 获取所有歌曲列表
            let list = this.category.list;
            this.official = list.slice(0,4);
            this.style = list.slice(5,11);
            this.global = list.slice(11,20);
        }).catch(function(err){
            console.log(err);
        })
    }
}
</script>

<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
.rank {
    width: 100%;
    height: 100%;
    .rank-container {
        overflow: hidden;
        .bin {
            width: 100%;
            height: 150px;
        }
        position: fixed;
        top: 184px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        @include bg_sub_color();
        .group-title{
        padding: 10px 35px;
        @include font_size($font_large);
        @include font_color();
        font-weight: bold;
    }
    .normal-group {
        li {
            display: flex;
            padding: 10px 35px;
            box-sizing: border-box;
            align-items: center;
            .rank-left {
                position: relative;
                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 10px;
                }
                p {
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                    color: #ffffff;
                    @include font_size($font_medium_s);
                }
            }
            .rank-right{
                margin-left: 20px;
                p {
                    @include font_color();
                    @include font_size($font_medium_s);
                    padding: 10px 0;
                }
            }
        }
    }
    .other-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 35px;
        li {
            padding: 10px 0;
            box-sizing: border-box;
            .rank-top {
                position: relative;
                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 10px;
                }
                p {
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                    color: #ffffff;
                    @include font_size($font_medium_s);
                }
            }
            .rank-bottom{
                width: 200px;
                @include no-wrap();
                p {
                    text-align: center;
                    padding: 10px 0;
                    @include font_color();
                    @include font_size($font_medium_s);
                    @include clamp(1);
                }
            }
        
        }
    }
    }
    
    .bin {
        width: 100%;
        height: 150px;
    }
    .titele-wrap {
            width: 100%;
            height: 84px;
            line-height: 84px;
            @include bg_sub_color();
            padding: 0 20px;
            border-bottom: 1px solid #cccccc;
            h3 {
                @include font_size($font_large);
                font-weight: bold;
                @include font_color();
                // @include font_active_color();
            }
    }

    .official-wrap {
        display: flex;
        justify-content:space-around;
        .music-item {
            overflow: hidden;
            padding: 12px;
            img {
                border-radius: 10px;
                width: 100%;
                height: 100%;
            }
        }
    }

    .style-wrap,.global-wrap {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 20px 0;
            .music-item {
                width: 200px;
                padding-bottom: 20px;
                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 20px;
                }
                p {
                    @include clamp(2);
                    @include font_size($font_medium_s);
                    @include font_color();
                    text-align: center;
                }
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