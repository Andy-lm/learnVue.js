<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from 'vue'

export default {
  name: 'App',
  setup(){
    const clientWidth = document.documentElement.clientWidth;
    console.log(clientWidth);
    const menuVisible = ref(clientWidth <= 500?false:true);
    provide('menuVisible',menuVisible)
  }
}
</script>
