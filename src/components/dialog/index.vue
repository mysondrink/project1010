// 对话框
// 限制每页显示条数为5条
<template>
  <div>
    <el-dialog
      :visible.sync="visible"
      v-if="visible"
      class="dl"
      @close="dialogClose"
    >
      <div slot="title" class="dialog-title">
        <span class="title-text">轨道详情</span>
      </div>
      <el-form :inline="true">
        <el-form-item label="样本编号">
          <el-input v-model="inputId" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="inputStatus" placeholder="状态">
            <el-option label="充电" value="充电"></el-option>
            <el-option label="运输" value="运输"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template v-if="dialogType == 5">
        <el-table :data="dialogNewData" height="100%">
          <template v-for="(v, k) in columnTitle">
            <el-table-column
              :prop="v.prop"
              :label="v.label"
              :min-width="v.minwidth"
              :align="v.align"
              :key="k"
              v-if="k == 4"
            >
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text"
                  >取消</el-button
                >
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
      </template>
      <template v-else>
        <el-table :data="dialogNewData" height="100%">
          <template v-for="(v, k) in columnTitle">
            <el-table-column
              :prop="v.prop"
              :label="v.label"
              :min-width="v.minwidth"
              :align="v.align"
              :key="k"
            >
            </el-table-column>
          </template>
        </el-table>
      </template>
      <span slot="footer" class="dialog-footer" align="center">
        <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5]"
          :page-size="PagaSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalData"
        >
        </el-pagination>
      </span>
    </el-dialog>
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