<template>
    <div class="detail">
        <SubHeader :title="playlist.name"></SubHeader>
        <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop>
            <div class="bottom">
                <ScrollView ref="scrollview">
                    <DetailBottom :playlist="playlist.tracks"></DetailBottom>
                </ScrollView>
            </div>
    </div>
</template>

<script>
import SubHeader from "../components/Detail/DetailHeader"
import DetailTop from "../components/Detail/DetailTop"
import DetailBottom from "../components/Detail/DetailBottom"
import ScrollView from  "../components/ScrollView"
import {getPlayList,getAlbum,getArtistsSongs} from "../api/index.js";
import MetaInfo from "../../vue-meta-info"
export default {
    name:"Detail",
    metaInfo:MetaInfo.detail,
    data(){
        return {
            playlist:{}
        }
    },
    created:function(){
        if(this.$route.params.type === 'personalized') {
            getPlayList({id: this.$route.params.id}).then((data) => {
            // console.log(data);
                this.playlist = data.playlist
                // console.log(this.playlist);
            }).catch((err) => {
                console.log(err);
            })
        }else if(this.$route.params.type === 'album') {
            getAlbum({id: this.$route.params.id}).then((data) => {
            // console.log(data);
                // this.playlist = data.playlist
                this.playlist = {
                    name:data.album.name,
                    coverImgUrl:data.album.picUrl,
                    tracks:data.songs
                }
            }).catch((err) => {
                console.log(err);
            })
        }else if(this.$route.params.type === 'singer') {
            getArtistsSongs({id: this.$route.params.id}).then((data) => {
            // console.log(data);
                // this.playlist = data.playlist
                this.playlist = {
                    name:data.artist.name,
                    coverImgUrl:data.artist.picUrl,
                    tracks:data.hotSongs
                }
            }).catch((err) => {
                console.log(err);
            })
        }else if(this.$route.params.type === 'rank') {
            getPlayList({id: this.$route.params.id}).then((data) => {
            // console.log(data);
                this.playlist = data.playlist
            }).catch((err) => {
                console.log(err);
            })
        }
        
    },
    mounted(){
        let defaultHeight = this.$refs.top.$el.offsetHeight;
        // console.log(defaultHeight);
        // 使用ref不仅仅可以获取原生的元素，还可以获取获取组件
        this.$refs.scrollview.scrolling((offsetY) =>{
            // console.log(offsetY);
            if(offsetY > 0) {
                // console.log("向下滚动");
                let scale = 1 + offsetY / defaultHeight;
                // console.log(scale);
                this.$refs.top.$el.style.transform = `scale(${scale})`;
            }else {
                // console.log("向上滚动");
                // 注意高斯模糊效果不建议在移动端使用，太消耗性能，可以使用蒙版的方式代替
                // let scale = 20 * Math.abs(offsetY) / defaultHeight;
                let scale = Math.abs(offsetY) / defaultHeight;
                this.$refs.top.changeMask(scale);
                // // console.log(scale);
                // this.$refs.top.$el.style.filter = `blur(${scale}px)`;
            }
        })
    },
    components:{
        SubHeader,
        DetailTop,
        DetailBottom,
        ScrollView
    },
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
    .detail {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @include bg_sub_color();
        // background-color: aqua;
        .bottom {
            position: fixed;
            top: 500px;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
</style>