<template>
  <div>
    <div>
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">所有商品</el-menu-item>
        <el-menu-item index="1">所有配料</el-menu-item>
      </el-menu>
    </div>
    <div>
      <el-table :data="dishes" style="width: 100%">
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品 ID" prop="id">
        </el-table-column>
        <el-table-column label="商品名称" prop="name">
        </el-table-column>
        <el-table-column label="描述" prop="desc">
        </el-table-column>
        <el-table-column label="标准配方" prop="ingredients">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        console.log(1);
      }
    },
    data() {
      return {
        dishes: []
      }
    }
  }

</script>