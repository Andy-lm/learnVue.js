<!-- template用于编写当前组件结构代码 -->
<template>
  <div id="app">
    <p @click="say">{{this.name}}</p>
  </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
  // 这里使用ES6模块化代码将这个对象暴露出去
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
      }
    }
  };
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped></style>