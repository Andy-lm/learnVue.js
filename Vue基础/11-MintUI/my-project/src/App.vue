<!-- template用于编写当前组件结构代码 -->
<template>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-switch v-model="value"></mt-switch>
  </div>

</template>
<!-- script用于编写当前组件业务代码 -->
<script>
  // 这里使用ES6模块化代码将这个对象暴露出去
  export default {
    name: 'App',
    data: function () {
      return {
        value: true
      }
    }

  }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped>

</style>