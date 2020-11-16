<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"></Tabs>
    <div class="notes">
        <FormItem :filed-name="'备注'" 
        @update:value="onUpdateNotes"
        :placeholder="'在这里输入备注'">
        </FormItem>
    </div>
    <Tags></Tags>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';
  import Tabs from '../components/Tabs.vue';
  @Component({
    components: {Tags, FormItem, Tabs, NumberPad},
  })
  export default class Money extends Vue {
    record:RecordItem = {
      tags:[],
      notes:'',
      type:'-',
      amount:0
    }
    recordTypeList = recordTypeList
    get recordList(){
      return this.$store.state.recordList;
    }
    created(){
      this.$store.commit('fetchRecords');
    }
    onUpdateNotes(value:string){
      this.record.notes = value;
    }
    onUpdateAmount(value:string){
      this.record.amount = parseFloat(value);
    }
    saveRecord(){
      this.$store.commit('createRecord',this.record);
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