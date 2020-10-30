<!-- template用于编写当前组件结构代码 -->
<template>
    <!-- <div class="header" @click="changeTheme">
        <div class="header-left"></div>
        <p class="header-title">FANTA</p>
        <div class="header-right" @click.stop="accountClick"></div>
    </div> -->
    <div class="header" @click="changeTheme">
        <div class="left">
            <slot name="left" class="left">左边</slot>
        </div>
       <slot name="center">中间</slot>
        <div class="right">
           <slot name="right" class="right">右边</slot>
        </div>
    </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
    // 这里使用ES6模块化代码将这个对象暴露出去
    export default {
        name: 'Header',
        data:function(){
            return {
                theme:['theme','theme1','theme2'],
                index:0
            }
        },
        methods:{
             changeTheme() {
                this.index++;
                if(this.index >= this.theme.length) {
                    this.index = 0;
                }
                document.documentElement.setAttribute("data-theme", this.theme[this.index]);
            }
        }
    }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped lang="scss" rel="stylesheet/sass">
    @import '../assets/css/variable.scss';
    @import '../assets/css/mixin.scss';
    .header {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        @include bg_color();
        .left,
        .right {
            width: 84px;
            height: 84px;
            margin-top: 8px;
            *{
                width: 100%;
                height: 100%;
            }
        }
        
        /* .header-left {
            @include bg_img('../assets/images/logo');
        }
        .header-right {
            @include bg_img('../assets/images/account');
        }
        .header-title {
            text-align: center;
            line-height: 100px;
            color: #fff;
            font-weight: 700;
            @include font_size($font_medium);
        } */
    }
</style>