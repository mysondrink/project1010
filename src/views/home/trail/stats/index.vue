<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="轨道名称">
        <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"
          >查询</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-refresh-right"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ctype" label="控制器类型" width="180">
      </el-table-column>
      <el-table-column prop="mtype" label="模块类型" width="180">
      </el-table-column>
      <el-table-column prop="id" label="ID号" width="180"> </el-table-column>
      <el-table-column prop="sum" label="轨道容量" width="180">
      </el-table-column>
      <el-table-column prop="stats" label="运行状态" width="180">
        <template slot-scope="scope">
          <el-tag type="success" effect="dark">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="detail" label="详情" width="180">
        <template slot-scope="scope">
          <el-button type="primary" @click="dialogVisible = true"
            >详情</el-button
          >
          <template>
            <el-dialog :visible.sync="dialogVisible" class="dl">
              <div slot="title" class="dialog-title">
                <span class="title-text">轨道详情</span>
              </div>
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </template>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          sum: "5/48",
          stats: "success",
        },
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          sum: "5/48",
          stats: "success",
        },
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          sum: "5/48",
          stats: "success",
        },
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          sum: "5/48",
          stats: "success",
        },
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          sum: "5/48",
          stats: "success",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogVisible: false,
      table: {
        start_time: "",
        end_time: "",
        trail_name: "轨道",
        module_type: "",
        trail_type: "",
        trail_id: 0,
        car_id: 0,
        car_type: "",
        status: "",
        create_time: "",
        update_time: "",
        charge_area: 0,
        tran_area: 0,
      },
    };
  },
  methods: {
    ...mapActions("userModule", { trailTable: "trailinfo" }),
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    checkDetail() {
      console.log("detail!");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    getTable() {
      console.log("getTable!");
      this.trailTable(this.table)
        .then((res) => {
          console.log(res.data.data);
          console.log(res);
        })
        .catch((err) => {
          console.log("err: ", err.response.data.msg);
        });
    },
  },
  mounted() {
    this.getTable();
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

.dl .el-dialog {
  position: absolute;
  width: 824px;
  height: 695px;
  background: #ffffff;
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
}

.el-dialog__header {
  padding: 0px 0px 0px;
}

.dialog-title {
  width: 100%;
  height: 65px;
  background: #4285f4;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
}
/* 
.el-table .title-text {
  width: 100px;
  height: 25px;
  font-size: 20px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400;
  color: #ffffff;
  line-height: 23px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */
</style>
