<template>
    <ul class="detail-bottom">
        <li class="bottom-top" @click="selectAllMusic">
            <div class="bottom-icon"></div>
            <div class="bottom-title">播放全部</div>
        </li>
        <li v-for="value in playlist" :key="value.id" class="item" @click="selectMusic(value.id)">
            <div class="container">
                <h3>{{value.name}}</h3>
                <p>{{value.al.name}} - {{value.ar[0].name}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name:"DetailBottom",
    methods:{
        ...mapActions([
            "setFullScreen",
            "setMiniPlayer",
            "setSongDetail",
            'setCurrentIndex'
        ]),
        selectMusic(id){
            // this.$store.dispatch('setFullScreen',true);
            this.setFullScreen(true);
            this.setMiniPlayer(false);
            // console.log(id);
            let ids = this.playlist.map(item =>{
                return item.id;
            })
            this.setSongDetail([id])
            // let currentIndex = ids.indexOf(id);
            // console.log(currentIndex);
            // this.setSongDetail(ids);
            // this.setCurrentIndex(currentIndex);
            
        },
        selectAllMusic(){
            this.setFullScreen(true);
            let ids = this.playlist.map(item =>{
                return item.id;
            })
            // console.log(ids);
            this.setSongDetail(ids)
        }
    },
    props:{
        playlist:{
            type:Array,
            default:() => [],
            required:true
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../assets/css/variable.scss';
    @import '../../assets/css/mixin.scss';
    .detail-bottom {
        width: 100%;
        li {
            display: flex;
            align-items: center;
            width: 100%;
            height: 120px;
            padding: 30px;
            box-sizing: border-box;
            @include bg_sub_color();
            border-top: 1px solid #cccccc;
        }
        .bottom-top {
            // display: flex;
            // align-items: center;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            .bottom-icon {
                width: 60px;
                height: 60px;
                @include bg_img('../../assets/images/small_play');
                margin-right: 20px;
            }
            .bottom-title {
                @include font_color();
                @include font_size($font_large);

            }
        }
        .item {
            .container {
                h3 {
                    @include font_color();
                    @include font_size($font_medium_s);
                }
                p {
                margin-top: 10px;
                @include font_color();
                @include font_size(10Px);
                opacity: 0.8;
                }
            }   
            
        }
    }
</style>