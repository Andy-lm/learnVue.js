<template>
    <div class="recommend">
        <div class="recommend-warpper">
            <ScrollView>
            <div>
                <Banner :banners="banners"></Banner>
                <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" :type="'personalized'"></Personalized>
                <Personalized :personalized="albums" :title="'最新专辑'" @select="fatherSelectItem" :type="'album'"></Personalized>
                <NewSong :newsongs="newsongs"></NewSong>
                <div class="bin" v-if="isShowMiniPlayer"></div>
            </div>
            </ScrollView>
        </div>
        <!-- 这里是详情界面 -->
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import {getBanner,getPersonalized,getNewAlbum,getNewSong} from '../api/index';
import Banner from '../components/Recommend/Banner';
import Personalized from '../components/Recommend/Personalized';
import NewSong from '../components/Recommend/NewSong';
import ScrollView from '../components/ScrollView';
// import MetaInfo from "../../vue-meta-info"
import {mapGetters} from "vuex"
export default {
    name:"Recommend",
    // metaInfo:MetaInfo.recommend,
    data:function() {
        return {
            banners:[],
            personalized:[],
            albums:[],
            newsongs:[]
        }
    },
    methods:{
        fatherSelectItem:function(id,type) {
            // 使用router.push方法切换路由地址相当于<router-link>
            this.$router.push({
                path:`/recommend/detail/${id}/${type}`
            })
        }
    },
    computed:{
        ...mapGetters([
            'isShowMiniPlayer'
        ])
    },
    components:{
        Banner,
        Personalized,
        NewSong,
        ScrollView
    },
    created() { // 获取服务器的数据并保存
        getBanner().then((data) => {
            // console.log(data);
            this.banners = data.banners;
        }).catch(function(error) {
            console.log(error);
        })
        getPersonalized().then((data) => {
            // console.log(data);
            // 将父组件的数据传递给子组件
            this.personalized = data.result;
        }).catch(function(error) {
            console.log(error);
        })
        getNewAlbum().then((data) => {
            this.albums = data.albums.slice(0,6);
            // console.log(this.albums);
            // 将父组件的数据传递给子组件
        }).catch(function(error) {
            console.log(error);
        })
        getNewSong().then((data) => {
            // this.newsongs = data.result;
            let list = [];
            data.result.forEach((value) => {
                let obj = {};
                obj.id = value.id;
                obj.name = value.name;
                obj.picUrl = value.song.album.picUrl;
                let singer = '';
                for(let i = 0;i<value.song['artists'].length;i++) {
                    if(i === 0) {
                        singer = value.song['artists'][i].name;
                    }else {
                        singer += '/'+value.song['artists'][i].name;
                    }
                }
                obj.singer = singer;
                list.push(obj);
            })
            this.newsongs = list;
            // console.log(data);
            // 将父组件的数据传递给子组件
        }).catch(function(error) {
            console.log(error);
        })
    }
}
</script>

<style scoped lang="scss">
    .recommend {
        // overflow: hidden;
        position: fixed;
        top: 184px;
        left: 0;
        right: 0;
        bottom: 0;
        .recommend-warpper {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .bin {
                width: 100%;
                height: 150px;
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
</style>