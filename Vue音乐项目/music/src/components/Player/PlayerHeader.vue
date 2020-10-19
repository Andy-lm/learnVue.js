<!-- template用于编写当前组件结构代码 -->
<template>
    <div class="header">
        <div class="header-left" @click="hiddenNormalPlayer"></div>
        <div class="header-title">
            <h3>{{currentSong.name}}</h3>
            <p>{{currentSong.singer}}</p>
        </div>
        <div class="header-right"></div>
    </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
import {mapActions,mapGetters} from "vuex";
    // 这里使用ES6模块化代码将这个对象暴露出去
    export default {
        name: 'PlayerHeader',
        data:function(){
            return {
                theme:['theme','theme1','theme2'],
                index:0
            }
        },
        methods:{
            ...mapActions([
                'setFullScreen',
                'setMiniPlayer'
            ]),
            hiddenNormalPlayer(){
                this.setFullScreen(false);
                this.setMiniPlayer(true);
            }
        },
        props:{
            // title:{
            //     type: String,
            //     default: '',
            //     required: true,
            // }
        },
        computed:{
            ...mapGetters([
                'currentSong'
            ])
        }
    }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped lang="scss" rel="stylesheet/sass">
    @import '../../assets/css/variable.scss';
    @import '../../assets/css/mixin.scss';
    .header {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        // background-color: blue;
        // @include bg_color();
        position: relative;
        z-index: 999;
        .header-left,
        .header-right {
            width: 84px;
            height: 84px;
            margin-top: 8px;
        }
        .header-left {
            @include bg_img('../../assets/images/down');
        }
        // .header-right {
        //     // @include bg_img('../../assets/images/more');
        // }
        .header-title {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            // text-align: center;
            color: #fff;
            font-weight: 700;
            @include font_size($font_medium_s);
            h3 {
                @include clamp(1);
            }
            p {
               @include clamp(1); 
            }
        }
    }
</style>