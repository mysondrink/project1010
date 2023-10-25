<template>
  <div class="main">
    <h1>样本详情</h1>
    <el-descriptions :column="3" :size="size" border>
      <el-descriptions-item label="样本编号">123</el-descriptions-item>
      <el-descriptions-item label="条形码">123</el-descriptions-item>
      <el-descriptions-item label="状态">123</el-descriptions-item>
      <el-descriptions-item label="进入日期">123</el-descriptions-item>
      <el-descriptions-item label="进入位置">123</el-descriptions-item>
      <el-descriptions-item label="优先级">123</el-descriptions-item>
    </el-descriptions>
    <div class="table">
      <h1>位置</h1>
      <el-descriptions :size="size" border>
        <el-descriptions-item label="模块">123</el-descriptions-item>
        <el-descriptions-item label="区域">123</el-descriptions-item>
      </el-descriptions>
      <h1>历史位置</h1>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="task" label="任务" width="180">
        </el-table-column>
        <el-table-column prop="sarea" label="开始区域" width="180">
        </el-table-column>
        <el-table-column prop="stime" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="tararea" label="目标区域" width="180">
        </el-table-column>
        <el-table-column prop="artime" label="到达时间" width="180">
        </el-table-column>
        <el-table-column prop="duration" label="时长" width="180">
        </el-table-column>
        <el-table-column prop="detail" label="详情" width="180">
        </el-table-column>
      </el-table>
      <h1>请求至</h1>
      <el-descriptions>
        <el-descriptions-item label="下载区域">123</el-descriptions-item>
      </el-descriptions>
    </div>
    <el-row>
      <el-button type="primary">取下</el-button>
      <el-button type="primary">返回</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        num: "",
        code: "",
        stats: "",
        intime: "",
        inpos: "",
        priority: "",
        module: "",
        region: "",
      },
      tableData: [
        {
          task: "取出",
          sarea: "AM",
          stime: "2023-10-24 19:00",
          tararea: "SM",
          artime: "2023-10-24 19:00",
          duration: "1:00",
          detail: "详情",
        },
        {
          task: "取出",
          sarea: "AM",
          stime: "2023-10-24 19:00",
          tararea: "SM",
          artime: "2023-10-24 19:00",
          duration: "1:00",
          detail: "详情",
        },
      ],
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
.main {
  position: relative;
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  min-height: 800px;
}

.table {
  position: relative;
  top: 10px;
  bottom: 10px;
  padding: 10px;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  border: 10px;
  border: 1px solid #000000;
}
.el-row {
  position: relative;
  top: 20px;
}
</style>
