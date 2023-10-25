<template>
  <div class="register-container">
    <div class="left-container">
      <el-form
        :model="registerForm"
        status-icon
        :rules="registerRules"
        ref="registerForm"
        label-width="100px"
        class="register-form"
      >
        <div class="info-container">
          <img src="@/assets/titleLabel.png" />
        </div>
        <el-form-item prop="name">
          <el-input
            v-model.number="registerForm.name"
            placeholder="用户名"
            suffix-icon="el-icon-user"
          ></el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="registerForm.pass"
            autocomplete="off"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="registerForm.checkPass"
            autocomplete="off"
            placeholder="再次输入"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm('registerForm')">确认</el-button>
        </el-form-item>

        <el-form-item>
          <el-button @click="registerView()">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        pass: "",
        checkPass: "",
        name: "",
      },
      registerRules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerView() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang='less' scoped>
.register-container {
  // position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-y: hidden;
  background: url(~@/assets/login_2.jpg);
  background-size: 100% 100%;
  top: 0px; // 这里是设置与顶部的距离
  left: 0px; // 这里是设置与左边的距离

  .left-container {
    width: 37%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;

    .register-form {
      position: relative;
      min-width: 200px;
      max-width: 100%;
      padding: 160px 100px 0;
      margin: 0 auto;
      // overflow: hidden;
    }
  }
}

.el-input {
  width: 288px;
  height: 51px;
}

.el-form-item /deep/ .el-input__inner {
  width: 289px;
  height: 51px;
  background: #f5f5f5;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  font-size: 18px;
}

.el-form-item .el-button {
  position: relative;
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
