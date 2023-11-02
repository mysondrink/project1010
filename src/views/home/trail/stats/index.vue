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
      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item> -->
      <el-form-item>
        <el-button
          type="primary"
          @click="clearSearch"
          icon="el-icon-refresh-right"
          >重置</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :data="tableNewData" stripe>
      <el-table-column
        prop="controller_type"
        label="控制器类型"
        min-width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="module_type"
        label="模块类型"
        min-width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="controller_id"
        label="ID号"
        min-width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="trail_type"
        label="名称"
        min-width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="180"
        align="center"
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
        prop="detail"
        label="详情"
        min-width="180"
        align="center"
      >
        <template slot-scope="scope">
          <el-button type="primary" @click="showDetail()">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 页数跳转 -->
    <div class="pageItem">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10]"
        :page-size="PagaSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
      >
      </el-pagination>
    </div>
    <MyDialog :dialogVisible.sync="dialogVisible" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MyDialog from "@/views/home/dialog/index.vue";
export default {
  data() {
    return {
      formInline: {
        trail_type: "",
        status: "",
      },
      tableData: [], //原始数据
      tableNewData: [], //添加的数据
      currentPage: 1,
      PagaSize: 10,
      PageLength: null,
      totalPage: null,
      dialogVisible: false,
      searchItem: {
        controller_type: "轨道",
      },
    };
  },
  methods: {
    ...mapActions("userModule", { trailTable: "trailinfo" }),
    submitSearch() {
      if (this.formInline.trail_type != "" && this.formInline.status != "") {
        // 查询名称和状态
        this.tableNewData = this.tableData.filter((item) => {
          if (
            item.trail_type == this.formInline.trail_type &&
            item.status == this.formInline.status
          ) {
            return item;
          }
        });
      } else if (this.formInline.status != "") {
        // 只查询状态
        this.tableNewData = this.tableData.filter((item) => {
          if (item.status == this.formInline.status) {
            return item;
          }
        });
      } else if (this.formInline.trail_type != "") {
        // 只查询名称
        this.tableNewData = this.tableData.filter((item) => {
          if (item.trail_type == this.formInline.trail_type) {
            return item;
          }
        });
      } else {
        return;
      }
    },
    clearSearch() {
      this.formInline.trail_type = "";
      this.formInline.status = "";
      this.tableNewData = this.tableData;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      this.tableNewData = [];
      let num = this.PagaSize * (val - 1);
      let pageSize = 10;
      if (this.totalPage - num < 10) {
        pageSize = this.totalPage - num;
      }
      console.log(pageSize);
      for (let index = 0; index < pageSize; index++) {
        this.tableNewData.push(this.tableData[num + index]);
      }
      console.log(`当前页: ${val}`);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    getTable() {
      this.trailTable(this.searchItem)
        .then((res) => {
          if (res.data.code == "200" && res.data.data.data != null) {
            this.checkData(res.data.data.data);
          }
        })
        .catch((err) => {
          console.log("err: ", err.response.data.msg);
        });
    },
    // 将状态转为汉字
    checkData(data) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].status === "success") {
          data[index].status = "正常";
        } else if (data[index.status] == "warning") {
          data[index].status = "警告";
        } else {
          data[index].status = "错误";
        }
        data[index].sum = data[index].charge_area + data[index].trans_area;
        data[index].module_type = "-";
      }
      this.tableData = data;
      // this.tableNewData = this.tableData;
      for (let index = 0; index < 100; index++) {
        this.tableData.push(data[1]);
      }
      this.totalPage = this.tableData.length;
      this.PageLength = Math.ceil(this.totalPage / this.PagaSize);
      this.handleCurrentChange(1);
    },
    showDetail() {
      console.log("detail!");
      this.dialogVisible = true;
      // this.dialogNewData = this.dialogData;
    },
    handleClick(row) {
      console.log(row);
    },
    
  },
  mounted() {
    this.getTable();
  },
  components: {
    MyDialog,
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
</style>
