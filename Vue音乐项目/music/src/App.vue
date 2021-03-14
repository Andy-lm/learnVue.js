<template>
  <div id='app'>
    <MainHeader></MainHeader>
    <Select></Select>
    <Tabbar></Tabbar>
    <keep-alive include="Singer,Search,Rank,Recommend">
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import Tabbar from "./components/Tabbar";
import Player from "./views/Player";
import Select from "./components/Select";
export default {
  name: "App",
  components: {
    MainHeader,
    Tabbar,
    Player,
    Select
  },
  methods: {
  },
};
</script>
<style scoped lang="scss">

</style>