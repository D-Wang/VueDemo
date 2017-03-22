<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">商品</el-menu-item>
      <el-menu-item index="1">配方</el-menu-item>
    </el-menu>
    <DishList></DishList>
  </div>
</template>

<script>
  import DishList from './DishList.vue'

  export default {
    name: 'app',
    data() {
      return {
        activeIndex: '1',
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      DishList,
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style>

</style>