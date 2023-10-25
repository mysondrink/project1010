<template>
  <div class="main">
    <div class="bg">
      <div class="form">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="80px"
        >
          <el-form-item label="样本编号">
            <el-input
              v-model="formInline.num"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="80px"
        >
          <el-form-item label="条形码">
            <el-input
              v-model="formInline.code"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      formInline: {
        num: "",
        code: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.push("/sample/stats");
    },
  },
};
</script>

<style>
.bg {
  width: 25%;
  min-width: 400px;
  height: 35%;
  min-height: 130px;
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
  top: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.form .el-button {
  position: absolute;
  left: 0;
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