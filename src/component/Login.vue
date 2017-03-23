<template>
  <div id="Login">
    <el-form :model="loginForm" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input placeholder="请输入用户名" v-model="loginForm.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          userName: '',
          pass: ''
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style>
  #Login {
    margin-top: 30%;
    margin-left: 30%;
    margin-right: 30%;
    width: 40%;
  }
</style>