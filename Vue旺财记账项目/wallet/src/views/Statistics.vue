<template>    
    <Layout>
        <Tabs class-prefix="type" 
        :data-source="recordTypeList" :value.sync="type"></Tabs>
        <Tabs class-prefix="interval" 
        :data-source="itervalList" :value.sync="interval" height="48px"></Tabs>
        <div>
            {{type}}{{interval}}
            <ol >
                <li v-for="(group,index) in result" :key="index">
                    <h3>{{group.title}}</h3>
                    <ol>
                        <li v-for="item in group.items" :key="item.id">
                            {{item.amount}} --- {{item.createdAt}}
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import itervalList from '../constants/intervalList';
import recordTypeList from '../constants/recordTypeList';
import Tabs from '../components/Tabs.vue';
@Component({
    components:{Tabs}
})

export default class Statistics extends Vue{

get recordList(){
    return (this.$store.state as RootState).recordList;
}
get result(){
    type Items = RecordItem[];
    type hashTableValue = {title:string,items:Items};
    const {recordList} = this;
    const hashTable:{[key:string]:hashTableValue} = {};
    for(let i = 0;i<recordList.length;i++) {
        const [date,time] = recordList[i].createdAt!.split('T');
        hashTable[date] = hashTable[date] || {title:date,items:[]};
        hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
}
created(){
    this.$store.commit('fetchRecords');
}
type = '-';
interval = 'day';
itervalList = itervalList;
recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
    ::v-deep {
        .type-tabs-item{
            background: white;
            &.selected {
                background: #c4c4c4;
                &::after {
                    display: none;
                }
            }
        }
        // .interval-tabs-item {
        //     height: 48px;
        // }
    }
</style>