<!-- template用于编写当前组件结构代码 -->
<template>
    <Header class="header">
        <div slot="left" class="header-left" @click.stop="back"></div>
        <p slot="center" class="header-title">{{title}}</p>
        <div slot="right" class="header-right"></div>
    </Header>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
    // 这里使用ES6模块化代码将这个对象暴露出去
    import Header from "../Header";
    export default {
        name: 'SubHeader',
        components:{
            Header
        },
        methods:{
            back() {
                window.history.back();
            }
        },
        props:{
            title:{
                type: String,
                default: '',
                required: true,
            }
        }
    }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped lang="scss" rel="stylesheet/sass">
    @import '../../assets/css/variable.scss';
    @import '../../assets/css/mixin.scss';
    .header {
        .header-left,
        .header-right {
            width: 84px;
            height: 84px;
            // margin-top: 8px;
        }
        .header-left {
            @include bg_img('../../assets/images/back');
        }
        // .header-right {
        //     @include bg_img('../../assets/images/more');
        // }
        .header-title {
            text-align: center;
            line-height: 100px;
            color: #fff;
            font-weight: 700;
            @include clamp(1);
            @include font_size($font_medium_s);
        }
    }
</style>