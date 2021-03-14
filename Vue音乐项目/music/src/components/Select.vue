<template>
    <ul class="select-head" v-show="isShowSelect">
        <li @click.stop="accountClick">播放历史</li>
        <li @click.stop="changeTheme1">
            <div class="theme"></div>
            默认主题
        </li>
        <li @click.stop="changeTheme">
            <div class="theme1"></div>
            青绿主题
        </li>
        <li @click.stop="changeTheme2">
            <div class="theme2"></div>
            暗黑主题
        </li>
    </ul>
</template>

<script>
import {mapGetters,mapActions} from "vuex" 
    export default {
        name:'Select',
        data:function(){
            return {
                theme:['theme','theme1','theme2'],
                index:0
            }
        },
        computed:{
            ...mapGetters([
                'isShowSelect'
            ])
        },
        methods:{
            ...mapActions([
                'setShowSelect'
            ]),
            accountClick(){
                this.setShowSelect(false);
                this.$router.push('/account');
            },
            changeTheme(){
                this.setShowSelect(false);
                document.documentElement.setAttribute("data-theme", 'theme');
            },
            changeTheme1(){
                this.setShowSelect(false);
                document.documentElement.setAttribute("data-theme", 'theme1');
            },
            changeTheme2(){
                this.setShowSelect(false);
                document.documentElement.setAttribute("data-theme", 'theme2');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
    .select-head {
        z-index: 999;
        position: fixed;
        top: 100px;
        right: 0;
        width: 250px;
        // height: 300px;
        // background: chartreuse;
        // background-image: radial-gradient(circle at 10% 20%, rgb(43, 194, 57) 0%, rgb(149, 250, 113) 90%);
        //  background-color: rgb(43, 194, 57);
        @include bg_sub_color();
        li{
            position: relative;
            width: 100%;
            height: 100px;
            border-bottom: 1px solid #cccccc;
            text-align: center;
            line-height: 100px;
            color: #ffffff;
            // font-weight: bold;
            @include font_color();
            div {
                position: absolute;
                top: 0;
                left: 20px;
                bottom: 0;
                margin: auto;
                width: 30px;
                height: 30px;
                background: radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);
                border-radius: 50%;
                
            }
            .theme1 {
                background: radial-gradient(circle at 10% 20%, rgb(43, 194, 57) 0%, rgb(149, 250, 113) 90%);
            }
            .theme2 {
                background:#333;
            }
            
        }
    }
</style>