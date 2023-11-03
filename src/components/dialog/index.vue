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
            <el-option label="传输" value="传输"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-table :data="dialogNewData" height="100%">
        <el-table-column
          property="sample_id"
          label="样本编号"
          align="center"
        ></el-table-column>
        <el-table-column
          property="create_time"
          label="下发时间"
          align="center"
        ></el-table-column>
        <el-table-column
          property="user"
          label="操作人"
          align="center"
        ></el-table-column>
        <el-table-column
          property="sample_status"
          label="状态"
          align="center"
        ></el-table-column>
        <el-table-column property="detail" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text"
              >取消</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer" align="center">
        <el-pagination class="pagination"
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