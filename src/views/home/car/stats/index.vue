// 运输车搜索
<template>
  <div class="main">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="编号">
          <el-input
            v-model="formInline.user"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目标">
          <el-select v-model="formInline.target" placeholder="目标">
            <el-option label="目标一" value="shanghai"></el-option>
            <el-option label="目标二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-tag type="success" style="margin-left: 10px" >已装载</el-tag>
          <el-tag type="info" style="margin-left: 10px" >空</el-tag>
          <el-tag type="warning" style="margin-left: 10px" >正在移动</el-tag>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" icon="el-icon-refresh-right">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="num" label="编号" width="180">
          <template>
            <el-tag type="success" >已装载</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="编号" width="180">
        </el-table-column>

        <el-table-column prop="stats" label="状态" width="180">
        </el-table-column>

        <el-table-column prop="power" label="电池" width="180">
        </el-table-column>

        <el-table-column prop="targ" label="目标" width="180"> </el-table-column>
        <el-table-column prop="recpos" label="最近位置" width="180">
        </el-table-column>
        <el-table-column prop="samplenum" label="样本编号" width="180">
        </el-table-column>
        </el-table-column>
        <el-table-column prop="samplecode" label="样本条形码" width="180">
        </el-table-column>
        </el-table-column>
        <el-table-column prop="detail" label="详情" width="180">
          <template slot-scope="scope">
          <el-button type="primary" @click="checkDetail()">详情</el-button>
        </template>
        </el-table-column>
      </el-table>
      <!-- 页数跳转 -->
      <div class="pageItem">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[20, 40, 60, 80, 100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        >
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        target: "",
      },
      tableData: [
        {
          num: "45566",
          stats: "正在充电",
          power: "97%",
          targ: "1.36(c)",
          recpos: "1.36(c)",
          samplenum: "566",
          samplecode: "123456789",
          detail: "详情",
        },
        {
          num: "45566",
          stats: "正在充电",
          power: "97%",
          targ: "1.36(c)",
          recpos: "1.36(c)",
          samplenum: "566",
          samplecode: "123456789",
          detail: "详情",
        },
        {
          num: "45566",
          stats: "正在充电",
          power: "97%",
          targ: "1.36(c)",
          recpos: "1.36(c)",
          samplenum: "566",
          samplecode: "123456789",
          detail: "详情",
        },
        {
          num: "45566",
          stats: "正在充电",
          power: "97%",
          targ: "1.36(c)",
          recpos: "1.36(c)",
          samplenum: "566",
          samplecode: "123456789",
          detail: "详情",
        },
        {
          num: "45566",
          stats: "正在充电",
          power: "97%",
          targ: "1.36(c)",
          recpos: "1.36(c)",
          samplenum: "566",
          samplecode: "123456789",
          detail: "详情",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.pageItem .el-pagination {
  position: absolute;
  height: 50px;
  top: 800px;
  right: 0;
  font-size: 18px;
}

.el-table {
  font-size: 18px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400;
  text-align: center;
}

/* 样式穿透 /deep/ or >>> */
.el-form-item /deep/ .el-form-item__label {
  font-size: 18px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400;
  text-align: center;
}

.el-input /deep/ .el-input__inner,
.el-select /deep/ .el-input__inner {
  font-size: 20px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400;
  text-align: center;
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

