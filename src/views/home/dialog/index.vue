<template>
  <div>
    <el-dialog :visible.sync="visible" class="dl" @close="dialogClose">
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

      <el-table :data="dialogNewData">
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
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  data() {
    return {
      visible: false,
      inputId: null,
      inputStatus: "",
      dialogData: [
        {
          sample_id: 1,
          create_time: "2023",
          user: "李",
          sample_status: "充电",
        },
        {
          sample_id: 2,
          create_time: "2023",
          user: "123",
          sample_status: "充电",
        },
        {
          sample_id: 3,
          create_time: "2023",
          user: "李",
          sample_status: "充电",
        },
      ],
      dialogNewData: [],
    };
  },
  props: {
    dialogVisible: {
      default: false,
    },
  },
  methods: {
    searchId(val) {
      return this.dialogData.filter((item) => {
        if (item.sample_id == val) {
          return item;
        }
      });
    },
    searchStatus(val) {
      return this.dialogData.filter((item) => {
        if (item.sample_status == val) {
          return item;
        }
      });
    },
    dialogClose() {
      this.$emit("update:dialogVisible", false);
    },
  },
  // dialog监听输入框
  watch: {
    inputId: function (val) {
      if (val == "") {
        this.dialogNewData = this.dialogData;
      } else {
        this.dialogNewData = this.searchId(val);
      }
    },
    inputStatus: function (val) {
      if (val == "") {
        this.dialogNewData = this.dialogData;
      } else {
        this.dialogNewData = this.searchStatus(val);
      }
    },
    dialogVisible: function () {
      this.visible = this.dialogVisible;
    },
  },
  mounted() {
    //表单初始
    // this.dialogVisible = true;
    // console.log(this.dialogVisible);
    this.dialogNewData = this.dialogData;
  },
};
</script>

<style scoped>
.dl /deep/ .el-dialog__header {
  padding: 0px 0px 0px;
}

.dialog-title {
  width: 100%;
  height: 65px;
  background: #4285f4;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.25);
  /* border-radius: 20px 20px 20px 20px; */
  opacity: 1;
}

.dl /deep/ .el-dialog__headerbtn {
  position: absolute;
  top: 10px;
  width: 40px;
  height: 40px;
  font-size: 40px;
}

.dl /deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #ffffff;
}
</style>