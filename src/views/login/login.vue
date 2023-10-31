<template>
  <div class="login-container">
    <el-row>
      <el-col>
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
              type="text"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="密码"
              show-password
              type="password"
            ></el-input>
          </el-form-item>

          <!-- 按钮跳转 -->
          <el-form-item>
            <!-- <el-button @click="submitForm('loginForm')">登录</el-button> -->
            <el-button @click="getInfo()">登录</el-button>
          </el-form-item>

          <el-form-item>
            <el-button @click="registerView()">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginForm: {
        //初始值
        name: "",
        password: "",
        telephone: "12345678914",
      },
      user: {
        //初始值
        name: "",
        password: "12345678911",
        telephone: "1234567891",
      },
      loginRules: {
        //验证校验
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      trail: {
        trail_id: "123",
      },
    };
  },
  methods: {
    // 重命名
    ...mapActions("userModule", { userLogin: "login" }),
    // 页面跳转
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerView() {
      this.$router.push("/register");
    },
    login() {
      this.userLogin(this.user)
        .then(() => {
          // 跳转首页
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.replace("./index");
        })
        .catch((err) => {
          console.log("err: ", err.response.data.msg);
        });
    },
  },
};
</script>

<style lang="less" scoped>
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
