<template>
  <div id="app">
    {{name}}
    <LmInput :value="name" @input="input"></LmInput>
  </div>
</template>

<script>
import LmInput from "./LmInput.vue"
export default {
  name: 'App',
  data(){
    return {
      name:'lmmmm'
    }
  },
  components:{
    LmInput
  },
  methods:{
    input(value){
      this.name = value;
    }
  }
}
</script>

