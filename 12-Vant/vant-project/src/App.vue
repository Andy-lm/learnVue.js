<!-- template用于编写当前组件结构代码 -->
<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>
  // 这里使用ES6模块化代码将这个对象暴露出去
  export default {
    name: 'App',
    methods: {
      onClickLeft() {
        console.log("返回");
      },
      onClickRight() {
        console.log("按钮");
      },
      onSubmit() {
        console.log("提交订单");
      }
    },
  }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped>

</style>