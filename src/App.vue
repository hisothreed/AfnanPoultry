<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <header-comp></header-comp>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <router-view class="routerView"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headerComp from '@/components/header'
export default {
  name: 'app',
  components: {
    HeaderComp : headerComp
  }
}
</script>

<style>
.routerView {
  width: 100%;
}
#app {
  min-width: 340px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
