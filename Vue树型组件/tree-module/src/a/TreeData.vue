<template>
    <div class="tree-container">
        <TreeNode v-for="currentNode in myTree" :key="currentNode.id"
        :currentNode="currentNode" :defaultMargin="defaultMargin">
        </TreeNode>
    </div>
</template>

<script lang="js">
import TreeNode from './TreeNode'
export default {
    name:'TreeData',
    props:{
        myTree:{
            required:true,
            default:[]
        }
    },
    components:{
        TreeNode
    },
    data(){
        return {
            isTree:true,
            treeNodeMap:{},
            defaultMargin:0
        }
    },
    methods:{
        setTreeNodeMap(id,currentNodeVm){
            this.treeNodeMap[id] = currentNodeVm
        },
        toggleFolding(id,isFold){
            this.treeNodeMap[id].toggleShowChild(isFold);
        }
    }
}
</script>