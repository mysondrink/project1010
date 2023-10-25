<template>
  <div class="login-container">
    <div class="left-container">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="100px"
        class="login-form"
      >
        <div class="info-container">
          <img src="@/assets/titleLabel.png" />
        </div>

        <!-- 用户名 -->
        <el-form-item prop="name">
          <el-input
            v-model="loginForm.name"
            placeholder="用户名"
            suffix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>

        <!-- 按钮跳转 -->
        <el-form-item>
          <el-button @click="submitForm()">登录</el-button>
        </el-form-item>

        <el-form-item>
          <el-button @click="registerView()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginForm: {
        //初始值
        name: "",
        password: "",
      },
      loginRules: {
        //验证校验
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 页面跳转
    submitForm() {
      this.$router.push("/index");
    },
    registerView() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  position: relative; /* 设置父元素为相对定位 */
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-y: hidden;
  background: url(~@/assets/login_2.jpg);
  background-size: 100% 100%;
  top: 0px; // 这里是设置与顶部的距离
  left: 0px; // 这里是设置与左边的距离

  .left-container {
    overflow: hidden;
    position: absolute; /* 设置子元素为绝对定位 */
    width: 37%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;

    .login-form {
      position: absolute; /* 设置子元素为相对定位 */
      min-width: 200px;
      max-width: 100%;
      padding: 160px 100px 0;
      margin: 0 auto;
      overflow: hidden;
    }
  }
}

.el-input {
  width: 288px;
  height: 51px;
}

// .el-form-item .el-input {
//   margin-bottom: 40px;
//   font-size: 15px;
// }

.el-form-item /deep/ .el-input__inner {
  width: 289px;
  height: 51px;
  background: #f5f5f5;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  font-size: 18px;
}

.el-form-item .el-button {
  position: relative; /* 设置子元素为相对定位 */
  margin: 0px;
  width: 288px;
  height: 51px;
  background: #354545;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  font-size: 18px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400;
  color: #ffffff;
  line-height: 18px;
}
</style>
