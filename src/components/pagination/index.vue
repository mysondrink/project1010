<template>
  <div class="pagination">
    <el-pagination
      class="pageItem"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="PageSize"
      :page-sizes="[10]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalData"
    >
    </el-pagination>
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