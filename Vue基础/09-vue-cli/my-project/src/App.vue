<!-- template用于编写当前组件结构代码 -->
<template>
  <div id="app">
    <!-- <button @click="say">{{this.name}}</button>
    <button @click="getstore">获取数据</button> -->
    <!-- <One></One>
    <Two></Two> -->
    <router-link to="/one">Go to One</router-link>
    <router-link to="/two">Go to Two</router-link>
    <router-view></router-view>
  </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>

  export default {
    name: "App",
    data: function () {
      return {
        name: "Vue.js"
      }
    },
    methods: {
      say() {
        console.log("你好哇");
      },
      getstore() {
        console.log(this.$store.state.name);
      }
    }
  }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped>

</style>