<template>
  <div class="register-container">
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
</template>
 
<script>
import storageService from "@/service/storageService";
import userService from "@/service/userService";

import { mapActions } from "vuex";
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
      user: {
        name: "1234",
        password: "123456",
        telephone: "12312312315",
      },
      registerRules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 重命名
    ...mapActions("userModule", { userRegister: "register" }),

    submitForm(formName) {
      // 验证数据
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("register");
          this.register();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    register() {
      // 原方法
      // 请求API
      // const api = "http://localhost:1016/api/auth/register";
      // this.axios
      //   .post(api, { ...this.user })
      //   .then((res) => {
      //     // 保存token
      //     console.log(res.data);
      //     localStorage.setItem('token', res.data.data.token);
      //     this.$message({
      //       message: "注册成功",
      //       type: "success",
      //     });
      //     // 跳转主页
      //     this.$router.replace('/login');
      //   })
      //   .catch((err) => {
      //     // console.log("err:", err.response.data.msg);
      //     this.$message.error(err.response.data.msg);
      //   });

      this.userRegister(this.user)
        .then(() => {
          // 跳转首页
          this.$message({
            message: "注册成功",
            type: "success",
          });
          this.$router.replace("./login");
        })
        .catch((err) => {
          this.$router.push('/404');
          console.log("err: ", err.response.data.msg);
        });
    },

    registerView() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang='less' scoped>
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
