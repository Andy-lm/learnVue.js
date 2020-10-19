<!-- template用于编写当前组件结构代码 -->
<template>
    <div class="header" @click="changeTheme">
        <div class="header-left" @click.stop="back"></div>
        <p class="header-title">
            <ul>
                <li :class="{'active': switchNum === 0}" @click.stop="switchItem(0)">我喜欢的</li>
                <li :class="{'active': switchNum === 1}" @click.stop="switchItem(1)">最近听的</li>
            </ul>
        </p>
        <div class="header-right"></div>
    </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
    // 这里使用ES6模块化代码将这个对象暴露出去
    export default {
        name: 'AccountHeader',
        data:function(){
            return {
                theme:['theme','theme1','theme2'],
                index:0,
                switchNum:0
            }
        },
        methods:{
            changeTheme() {
                this.index++;
                if(this.index >= this.theme.length) {
                    this.index = 0;
                }
                document.documentElement.setAttribute("data-theme", this.theme[this.index]);
            },
            back() {
                window.history.back();
            },
            switchItem(index){
                this.switchNum = index;
            }
        },
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
        @include bg_color();
        position: relative;
        z-index: 999;
        .header-left,
        .header-right {
            width: 84px;
            height: 84px;
            margin-top: 8px;
        }
        .header-left {
            @include bg_img('../../assets/images/back');
        }
        .header-right {
            @include bg_img('../../assets/images/more');
        }
        .header-title {
            ul {
                display: flex;
                justify-content: center;
                // align-items: center;
                text-align: center;
                color: #fff;
                font-weight: 700;
                border: 1px solid #ffffff;
                
                border-radius: 10px;
                @include font_size($font_medium_s);
                height: 60px;
                margin-top: 20px;
                li {
                    height: 60px;
                    line-height: 60px;
                    padding: 0 20px;
                    &:nth-of-type(1) {
                        border-right: 1px solid #ffffff;
                    }
                    &.active{
                        background: rgba(255,255,255,0.3);
                    }
                }
            }
            
        }
    }
</style>