<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component,Watch} from 'vue-property-decorator';
  type Record = {
    tags:string[],
    notes:string,
    type:string,
    amount:number, // 可以是数据类型
    createdAt?:Date // 可以是类 | 构造函数
  }
  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags:string[] = ['衣','食','住','行'];
    recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    record:Record = {
      tags:[],
      notes:'',
      type:'-',
      amount:0
    }
    onUpdateTags(value:string[]){
      this.record.tags = value;
    }
    onUpdateNotes(value:string){
      this.record.notes = value;
    }
    onUpdateAmount(value:string){
      this.record.amount = parseFloat(value);
    }
    saveRecord(){
      let cloneRecord:Record = JSON.parse(JSON.stringify(this.record));
      cloneRecord.createdAt = new Date();
      this.recordList.push(cloneRecord);
    }
    @Watch('recordList')
    onRecordListChange(newValue:Record){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>