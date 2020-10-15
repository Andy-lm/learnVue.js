<!-- template用于编写当前组件结构代码 -->
<template>
  <div>
    <button @click="show">显示</button>
    <button @click="hidden">隐藏</button>
  </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
  // import Vue from "vue";
  // 这里使用ES6模块化代码将这个对象暴露出去
  export default {
    name: 'App',
    methods: {
      show() {
        // 使用在组件中添加的全局方法与实例方法来控制组件的显示与隐藏
        // Vue.showLoading();
        this.$showLoading();
      },
      hidden() {
        // Vue.hiddenLoading();
        this.$hiddenLoading();
      }
    },
  }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped>

</style>