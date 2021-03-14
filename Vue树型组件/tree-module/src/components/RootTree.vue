<template>
    <div class="root-wrap">
        <TreeNode v-for="currentNode in treeData" 
        :key="currentNode.id"
        :currentNode="currentNode">
        </TreeNode>
    </div>
</template>

<script>
import TreeNode from "./TreeNode.vue";
    export default {
        name:'RootTree',
        props:{
            treeData:{
                default:[],
            }
        },
        components:{
            TreeNode
        },
        data(){
            return {
                treeRoot:true,
                treeMap:{}
            }
        },
        methods:{
            setMap(id,vmNode){
                this.treeMap[id] = vmNode;
            },
            toggleFloding(id){
                this.treeMap[id].toggleFloding();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>