<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';
body{
  line-height: 1.5;
  font-family: $font_hei;
  color:#333;
  font-size: 16px;
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
