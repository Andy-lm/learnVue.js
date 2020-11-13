<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <FormItem :filed-name="'备注'" 
    @update:value="onUpdateNotes"
    :placeholder="'在这里输入备注'"/>
    <div class="notes">
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component,Watch} from 'vue-property-decorator';
  import recordListModel from "@/models/recordListModel";
  @Component({
    components: {Tags, FormItem, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = window.tagList;
    recordList = window.recordList;
    record:RecordItem = {
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
      recordListModel.create(this.record);
    }
    @Watch('recordList')
    onRecordListChange(newValue:RecordItem){
      recordListModel.save();
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
</style>