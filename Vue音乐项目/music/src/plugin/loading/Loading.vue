<!-- template用于编写当前组件结构代码 -->
<template>
    <div class="container" v-show="isShow">
        <div class="loading"></div>
        <p>{{title}}</p>
    </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
    // 这里使用ES6模块化代码将这个对象暴露出去
    export default {
        name: 'Loading',
        data: function () {
            return {
                title: "正在加载...",
                isShow: false
            }
        }
    }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.5);
        .loading {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 5px solid #fff;
            margin: 30px auto 15px;
            // border-top-color: rgb(129, 11, 240);
            @include border_loading_color();
            animation: loading 1.5s ease-in-out infinite;
        }
        p {
            text-align: center;
            /* font-size: 16px; */
            @include font_size($font_medium);
            color: white;
        }
    }

    

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

</style>