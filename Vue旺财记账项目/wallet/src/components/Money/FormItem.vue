<template>
  <div>
    <label class="notes">
      <span class="name">{{this.filedName}}</span>
      <input type="text" :placeholder="placeholder" v-model="value"> 
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class FormItem extends Vue{
value = '';
@Prop({required:true}) filedName!:string;
@Prop() placeholder?:string;
@Watch('value')
onValueChanged(newValue:string){
  this.$emit('update:value',newValue);
}
}
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>