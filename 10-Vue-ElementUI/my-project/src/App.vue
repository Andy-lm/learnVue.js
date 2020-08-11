<!-- template用于编写当前组件结构代码 -->
<template>
  <div id="app">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div class="block">
      <span class="demonstration">请对我们的服务进行评分</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">请对我们的服务进行评分</span>
      <el-rate v-model="value2" :colors="colors">
      </el-rate>
    </div>
  </div>
</template>
<!-- script用于编写当前组件业务代码 -->
<script>

  export default {
    name: "App",
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
<!-- 用于编写当前组件样式代码 -->
<style scoped>
  .demonstration {
    color: blue;
  }

  #app {
    margin: 100px auto;
    width: 800px;
    height: auto;
    background-color: floralwhite;
  }
</style>