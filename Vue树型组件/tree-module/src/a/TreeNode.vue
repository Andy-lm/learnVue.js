<template>
    <div class="tree-node-container">
        <tree-node></tree-node>
        <div class="next-node" v-if="showNext">
            <TreeNode  v-for="nextNode in currentNode.children" 
            :currentNode="nextNode" 
            :defaultMargin="defaultMargin + 20"
            :key="nextNode.id">
            </TreeNode>
        </div>
    </div>
</template>

<script>
export default {
    name:'TreeNode',
    props:{
        currentNode:{
            required:true,
        },
        defaultMargin:{
            required:true,
        }
    },
    data(){
        return {
            tree:null,
            isShow:true,
        }
    },
    components:{
        'tree-node':{
            render() {
                let slot = this.$parent.tree.$scopedSlots.default;
                let {currentNode,showNext,defaultMargin} = this.$parent;
                return slot({currentNode,showNext,defaultMargin});
            },
        }
    },
    computed:{
        showNext(){
            return this.currentNode.children && this.isShow
        }
    },
    created(){
        let parent = this.$parent;
        while(parent && parent.isTree !== true) {
            parent = parent.$parent;
        }
        // 找到这个多根树
        this.tree = parent;
        this.tree.setTreeNodeMap(this.currentNode.id,this);
    },
    methods:{
        toggleShowChild(show){
            this.isShow = show;
        }
    }
}
</script>