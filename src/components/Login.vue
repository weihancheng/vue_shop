<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像start -->
      <div class="avrat_box">
        <img src="../assets/logo.png" alt="头像" />
      </div>
      <!-- 头像end -->
      <!-- 登录表单start -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="0"
        class="login_form"
      >
        <!-- 用户名start -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 用户名end -->
        <!-- 密码start -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <!-- 密码end -->
        <!-- 按钮组start -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
        <!-- 按钮组end -->
      </el-form>
      <!-- 登录表单end -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { min: 5, max: 40, message: '长度在 5 到 40 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
      this.loginForm.username = ''
      this.loginForm.password = ''
    },
    // 点击登录按钮
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // const { data: res } = await this.$http.post('login', this.loginForm)
        // if (res.data.status !== 200) return this.$message.error('登录失败!')
        // this.$message.success('登录成功!')
        // window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avrat_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_form {
  position: absolute;
  padding: 0 20px;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
}
</style>
