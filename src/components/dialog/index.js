
export default {
  name: "MyDialog",
  data() {
    return {
      visible: false,
      inputId: null,
      inputStatus: "",
      // dialogData: [], // 接收到的数据
      dialogNewData: [], //展示数据
      currentPage: 1,
      PagaSize: 5,
      PageLength: null,
      totalData: null,
      PageSize: null,
    };
  },
  props: {
    dialogVisible: {
      default: false,
    },
    columnTitle: {
      default: null,
    },
    dialogType: {
      default: null,
    },
    dialogData: {
      default: null,
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
      this.inputStatus = null;
      this.inputId = null;
      this.tableData = [],
        // currentPage: 1,
        // PageLength: null,
        // totalData: null,
        this.$emit("update:dialogVisible", false);
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      this.dialogNewData = [];
      let num = this.PagaSize * (val - 1);
      let temp = this.PagaSize;
      if (this.totalData - num < temp) {
        temp = this.totalData - num;
      }
      for (let index = 0; index < temp; index++) {
        this.dialogNewData.push(this.dialogData[num + index]);
      }
      console.log(`当前页: ${val}`);
    },
    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
    checkData() {
      // this.dialogNewData = this.dialogData;
      this.totalData = this.dialogNewData.length;
      this.PageLength = Math.ceil(this.totalData / this.PagaSize);
    },
  },
  // dialog监听输入框
  watch: {
    inputId: function (val) {
      if (val == "") {
        this.dialogNewData = this.dialogData;
        this.checkData();
        this.handleCurrentChange(1);
      } else {
        this.dialogNewData = this.searchId(val);
        if (this.inputStatus != null && this.inputStatus != "") {
          this.dialogNewData = this.dialogNewData.filter((item) => {
            if (item.sample_status == this.inputStatus) {
              return item;
            }
          });
        }
        this.checkData();
      }
    },
    inputStatus: function (val) {
      if (val == "") {
        this.dialogNewData = this.dialogData;
        this.checkData();
        this.handleCurrentChange(1);
      } else {
        this.dialogNewData = this.searchStatus(val);
        if (this.inputId != null && this.inputId != "") {
          this.dialogNewData = this.dialogNewData.filter((item) => {
            if (item.sample_id == this.inputId) {
              return item;
            }
          });
        }
        this.checkData();
      }
    },
    dialogVisible: function () {
      this.visible = this.dialogVisible;
      this.dialogNewData = this.dialogData;

      this.checkData();
      this.handleCurrentChange(1);
    },
    // 重新赋值，不然浏览器报错
    dialogData: function () {
      this.dialogData = this.dialogData;
    },
  },
  mounted() { },
  components: {
  },
};

