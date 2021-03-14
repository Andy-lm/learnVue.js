<template>
<div class="tree">
  <TreeData :myTree="myTree" ref="treeData">
    <template v-slot:default="{ currentNode,showNext,defaultMargin}">
      <div class="node" :style="{marginLeft:defaultMargin+'px'}" :class="{isFold:showNext}">
        <div class="node-title">{{currentNode.name}}</div>
        <button class="node-btn" @click="toggleFolding(currentNode.id,showNext,defaultMargin)">Folding</button>
      </div>
    </template>
  </TreeData>
</div>
</template>


<script>
import TreeData from "../components/TreeData"
export default {
  name:'Tree',
  data(){
    return {
      myTree:[
        {
          id:'1',
          name:'节点1',
          children:[
            {
              id:'1-1',
              name:'节点1-1',
              children:[
                {
                  id:'1-1-1',
                  name:'节点1-1-1'
                }
              ]
            },
            {
              id:'1-2',
              name:'节点1-2'
            }
          ]
        },
        {
          id:2,
          name:'节点2',
          children:[
            {
              id:'2-1',
              name:'节点2-1',
              children:[
                {
                  id:'2-1-1',
                  name:'节点2-1-1'
                }
              ]
            },
            {
              id:'2-2',
              name:'节点2-2'
            }
          ]
        }
      ],
    }
  },
  components:{
    TreeData
  },
  methods:{
    toggleFolding(id,showNext){
      this.$refs.treeData.toggleFolding(id,!showNext);
    }
  },

}
</script>


<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .node {
    display: inline-block;
    border: 1px solid red;
    margin: 4px;
  }

  .isFold{
    display: inline-block;
    border: 1px solid blue;
    margin: 4px;
  }

  .node-title {
    float: left;
  }
</style>



