<template>
  <div class="main">
    <h1>样本详情</h1>
    <el-descriptions :column="3" border>
      <template v-for="(v, k) in descriptions">
        <el-descriptions-item :label="v.label" v-if="k < 6">{{
          v.value
        }}</el-descriptions-item>
      </template>
    </el-descriptions>
    <div class="table">
      <h1>位置</h1>
      <el-descriptions border :column="3">
        <template v-for="(v, k) in descriptions">
          <el-descriptions-item :label="v.label" v-if="k > 5">{{
            v.value
          }}</el-descriptions-item>
        </template>
      </el-descriptions>

      <template>
        <h1>历史记录</h1>
        <el-table :data="tableData" stripe style="width: 100%">
          <template v-for="(v, k) in columnTitle">
            <el-table-column
              :prop="v.prop"
              :label="v.label"
              :width="v.width"
              :min-width="v.minwidth"
              :align="v.align"
              :key="k"
              v-if="k == 6"
            >
              <template slot-scope="scope">
                <el-button type="primary" @click="showDetail()">详情</el-button>
              </template>
            </el-table-column>
            <el-table-column
              :prop="v.prop"
              :label="v.label"
              :width="v.width"
              :min-width="v.minwidth"
              :align="v.align"
              :key="k"
              v-else
            >
            </el-table-column>
          </template>
        </el-table>
      </template>

      <h1>请求至</h1>
      <el-descriptions border :column="3" style="width: 180px">
        <template v-for="(v, k) in descriptions">
          <el-descriptions-item :label="v.label" v-if="k > 7">{{
            v.value
          }}</el-descriptions-item>
        </template>
      </el-descriptions>
    </div>
    <el-row class="btn-row">
      <el-button type="primary" @click="takeoff">取下</el-button>
      <el-button type="primary" @click="returnback">返回</el-button>
    </el-row>
    <MyDialog
      :dialogVisible.sync="dialogVisible"
      :columnTitle.sync="detailColumnTitle"
      :dialogType.sync="dialogType"
      :dialogData="dialogData"
      :dialogTitle="dialogTitle"
    />
  </div>
</template>

<script>
import indexjs from "./index.js";
export default {
  ...indexjs,
};
</script>

<style scoped>
@import "./index.css";
</style>
