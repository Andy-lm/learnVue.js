<!-- template用于编写当前组件结构代码 -->
<template>
    <div>
        <p>我是第一个组件</p>
        <!-- <button @click="getstore">获取数据</button> -->
    </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
    // 这里使用ES6模块化代码将这个对象暴露出去
    export default {
        name: 'One',
        data: function () {
            return {

            }
        },
        methods: {
            getstore() {
                console.log(this.$store.state.name);
            }
        }
    }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped>

</style>