<template>    
    <Layout>
        <Types class-prefix="zzz" :value.sync="yyy"></Types>
        <Types class-prefix="yyy"></Types>
    </Layout>
</template>

<script>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '../components/Money/Types.vue';
@Component({
    components:{Types}
})
export default class Statistics extends Vue{

}
</script>

<style lang="scss" scoped>
    ::v-deep .zzz-item{
        background: white;
        &.selected {
            background: #c4c4c4;
            ::after {
                display: none;
            }
        }
    }
</style>