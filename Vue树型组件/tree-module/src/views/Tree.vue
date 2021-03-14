<template>
    <div class="tree-wrap">
        <RootTree :treeData="treeData" ref="tree">
            <template v-slot:default="{currentNode}">
                <div class="node-wrap">
                    <p>{{currentNode.name}}</p>
                    <button @click.stop="toggleFloding(currentNode.id)">Floding</button>
                </div>
            </template>
        </RootTree>
    </div>
</template>


<script>
import RootTree from "../components/RootTree.vue";
export default {
   name:'Tree',
   data(){
       return {
           treeData:[
               {
                name:'节点1',
               id:'1',
               children:[
                   {
                       name:'节点1-1',
                       id:'1-1',
                       children:[
                           {
                               name:'节点1-1-1',
                               id:'1-1-1'
                           }
                       ]
                   },
                   {
                       name:'节点1-2',
                       id:'1-2',
                       children:[
                           {
                               name:'节点1-2-1',
                               id:'1-2-1'
                           }
                       ]
                   }
               ]
               }
           ]
       }
   },
   components:{
       RootTree
   },
   methods:{
       toggleFloding(id){
           this.$refs.tree.toggleFloding(id);
       }
   }
}
</script>

<style lang="scss" scoped>
    
</style>