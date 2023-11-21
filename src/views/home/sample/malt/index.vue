// 样本取出
<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="样本编号">
        <el-input
          v-model="formInline.sample_id"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.position" placeholder="活动区域">
          <el-option v-for="v in targetList" :label="v" :value="v"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSearch" icon="el-icon-search"
          >查询</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="clearSearch"
          icon="el-icon-refresh-right"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%">
      <template v-for="(v, k) in columnTitle">
        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-if="k == 1"
        >
          <template slot-scope="scope">BM</template>
        </el-table-column>
        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-else-if="k == 5"
        >
          <template slot-scope="scope">
            <el-button type="primary" @click="showDetail()">详情</el-button>
          </template>
        </el-table-column>
        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-else
        >
        </el-table-column>
      </template>
    </el-table>
    <!-- 页数跳转 -->
    <MyPage
      :pageData.sync="tableNewData"
      :PageSize.sync="PageSize"
      @getTableData="getTableData"
    />
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
