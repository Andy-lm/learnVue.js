<template>
  <div id='app'>
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player></Player>
  </div>

</template>

<script>
import Header from "./components/Header";
import Tabbar from "./components/Tabbar";
import Player from "./views/Player";
export default {
  name: "App",
  components: {
    Header,
    Tabbar,
    Player
  },
  methods: {
  },
};
</script>
<style scoped lang="scss">

</style>