<!-- template用于编写当前组件结构代码 -->
<template>
    <Header class="header">
        <div slot="left" class="header-left" @click.stop="back"></div>
        <p slot="center" class="header-title">
            <ul>
                <li :class="{'active-account': switchNum === 0}" @click.stop="switchItem(0)">我喜欢的</li>
                <li :class="{'active-account': switchNum === 1}" @click.stop="switchItem(1)">最近听的</li>
            </ul>
        </p>
        <div slot="right" class="header-right"></div>
    </Header>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
    import Header from "../Header"
    // 这里使用ES6模块化代码将这个对象暴露出去
    export default {
        name: 'AccountHeader',
        data:function(){
            return {
                switchNum:0
            }
        },
        components:{
            Header
        },
        methods:{
            back() {
                window.history.back();
            },
            switchItem(index){
                this.switchNum = index;
                this.$emit('switchItem',index);
            }
        },
    }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped lang="scss" rel="stylesheet/sass">
    @import '../../assets/css/variable.scss';
    @import '../../assets/css/mixin.scss';
    .header {
        .header-left {
            @include bg_img('../../assets/images/back');
        }
        // .header-right {
        //     // @include bg_img('../../assets/images/more');
        // }
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
                    &.active-account{
                        background: rgba(255,255,255,0.3);
                    }
                }
            }
            
        }
    }
</style>