<template>
  <div class="login">
    <div class="login-box">
        <h4>电商后台管理系统</h4>
      <!-- 表单 -->
      <el-form ref="LoginFormRef" :model="LoginForm" :rules="Formrules">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="LoginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            show-password
            prefix-icon="el-icon-star-on"
            v-model="LoginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item class="form-button">
          <el-button size="small" type="primary" @click="tologin"
            >登录</el-button
          >
          <el-button size="small" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getLogin } from '../../utils/api.js'
export default {
  data() {
    return {
      // 表单数据
      LoginForm: {
        username: '',
        password: ''
      },
      //   表单验证
      Formrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //  点击登录验证是否登录成功
    tologin() {
      this.$refs.LoginFormRef.validate(async (valid) => {
        if (!valid) {
          return false
        }
        const res = await getLogin(this.LoginForm)
        console.log(res)

        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: rgb(101, 205, 212);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    padding: 10px 30px;
    box-sizing: border-box;
    text-align: center;
    width: 300px;
    height: 250px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 3px 3px #fff;
    .form-button {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
