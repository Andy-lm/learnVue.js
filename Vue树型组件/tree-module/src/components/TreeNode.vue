<template>
    <div class="tree-node-wrap">
        <current-node></current-node>
        <div class="next-node" v-show="isShow">
            <TreeNode v-for="nextNode in currentNode.children" 
            :key="nextNode.id" 
            :currentNode="nextNode"
            >
            </TreeNode>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TreeNode',
        props:{
            currentNode:{
                default:{}
            }
        },
        data(){
            return {
                tree:null,
                isFloding:false
            }
        },
        components:{
            'current-node':{
                render(){
                    let slot = this.$parent.tree.$scopedSlots.default;
                    let {isFloding,currentNode} = this.$parent;
                    return slot({isFloding,currentNode});
                }
            }
        },
        computed:{
            isShow(){
                return this.currentNode.children && !this.isFloding
            }
        },
        methods:{
            toggleFloding(){
                this.isFloding = !this.isFloding;
            }
        },
        created(){
            console.log();
            let parent = this.$parent;
            while(parent && !parent.treeRoot) {
                parent = parent.$parent;
            }
            this.tree = parent;
            this.tree.setMap(this.currentNode.id,this);
        }   
    }
</script>

<style lang="scss" scoped>

</style>