<template>
  <div class="main">
    <div class="bg">
      <div class="form">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="100px"
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
          label-width="100px"
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
import indexjs from "./index.js";
export default {
  ...indexjs,
}
</script>

<style>
@import "./index.css";
</style>