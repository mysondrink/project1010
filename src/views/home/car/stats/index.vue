// 运输车搜索
<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="运输车编号">
        <el-input
          v-model="formInline.car_id"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.status" placeholder="状态">
          <el-option label="正在充电" value="charge"></el-option>
          <el-option label="正在运输" value="trans"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="目标">
        <el-select v-model="formInline.target" placeholder="目标">
          <el-option v-for="v in targetList" :label="v" :value="v"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-tag type="success" style="margin-left: 10px">已装载</el-tag>
        <el-tag type="info" style="margin-left: 10px">空</el-tag>
        <el-tag type="warning" style="margin-left: 10px">正在移动</el-tag>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSearch()" icon="el-icon-search"
          >查询</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clearSearch" icon="el-icon-refresh-right"
          >重置</el-button
        >
      </el-form-item>
    </el-form>

    <!-- 第一列为标签页
    第九列为详情 -->
    <el-table :data="tableData" stripe>
      <template v-for="(v, k) in columnTitle">
        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-if="k == 0"
        >
          <template slot-scope="scope">
            <el-tag type="success" >已装载</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-else-if="k == 8"
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
