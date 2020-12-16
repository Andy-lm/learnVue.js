<template>
  <div id="app">
    <h1>仿探探卡片拖拽效果</h1>
    <DemoTanTan></DemoTanTan>
  </div>
</template>

<script lang="js">
import DemoTanTan from "./pages/demotantan/DemoTanTan.vue";
export default {
  name:"App",
  components:{
    DemoTanTan
  }
}
</script>


<style lang="scss">
h1 {
  text-align: center;
}
</style>
