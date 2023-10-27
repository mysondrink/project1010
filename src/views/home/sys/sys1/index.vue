<template>
  <!-- 使用card进行包装
同时使用栅栏布局进行设计 -->
  <div class="main">
    <div class="bg">
      <div class="form">
        <el-form
          :model="formInline"
          class="demo-form-inline"
          label-width="100px"
        >
          <el-form-item label="旧密码">
            <el-input
              v-model="formInline.old"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input
              v-model="formInline.new"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item label="再次输入密码">
            <el-input
              v-model="formInline.reput"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        num: "",
        new: "",
        reput: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.bg {
  width: 30%;
  height: 300px;
  position: relative;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  border: 10px;
  border: 1px solid #000000;
}

.form {
  width: 90%;
  height: 90%;
  position: relative;
  top: 10%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.form .el-button {
  left: 70%;
  width: 80px;
}

.main {
  position: relative;
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  min-height: 800px;
}
</style>