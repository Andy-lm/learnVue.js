<template>
  <div>
    <label class="formItem">
      <span class="name">{{filedName}}</span>
      <input type="text" :placeholder="placeholder" 
      :value="value" @input="onValueChanged($event.target.value)"> 
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class FormItem extends Vue{
@Prop({default:''}) readonly value!:string;
@Prop({required:true}) filedName!:string;
@Prop() placeholder?:string;
onValueChanged(newValue:string){
  this.$emit('update:value',newValue);
}
}
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>