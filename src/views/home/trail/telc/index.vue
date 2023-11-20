<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="轨道名称">
        <el-input
          v-model="formInline.trail_type"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.status" placeholder="状态">
          <el-option label="正常" value="正常"></el-option>
          <el-option label="警告" value="警告"></el-option>
          <el-option label="错误" value="错误"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSearch()" icon="el-icon-search"
          >查询</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="clearSearch()"
          icon="el-icon-refresh-right"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 第四列为固定列TCP/IP
      第五、六列为标签页
      第八列为按钮页 -->
    <el-table :data="tableData" stripe>
      <template v-for="(v, k) in columnTitle">
        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-if="k == 3"
        >
          <template slot-scope="scope">TCP/IP</template>
        </el-table-column>

        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-else-if="k == 4"
        >
          <template slot-scope="scope">
            <el-tag
              :type="
                scope.row.status === '正常'
                  ? 'success'
                  : scope.row.status === '警告'
                  ? 'warning'
                  : 'danger'
              "
              disable-transitions
              effect="dark"
              >{{ scope.row.status }}</el-tag
            >
          </template>
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
            <el-tag
              :type="
                scope.row.status === '正常'
                  ? 'success'
                  : scope.row.status === '警告'
                  ? 'warning'
                  : 'danger'
              "
              disable-transitions
              effect="dark"
              >{{ scope.row.status }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column
          :prop="v.prop"
          :label="v.label"
          :min-width="v.minwidth"
          :align="v.align"
          :key="k"
          v-else-if="k == 7"
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
