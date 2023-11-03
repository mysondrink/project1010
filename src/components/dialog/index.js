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
        {
          sample_id: 4,
          create_time: "2023",
          user: "李",
          sample_status: "充电",
        },
        {
          sample_id: 5,
          create_time: "2023",
          user: "李",
          sample_status: "充电",
        },
        {
          sample_id: 6,
          create_time: "2023",
          user: "李",
          sample_status: "充电",
        },
      ],
      dialogNewData: [],
      currentPage: 1,
      PagaSize: 5,
      PageLength: null,
      totalData: null,
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
      console.log(temp);
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
      this.handleCurrentChange(1);
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
      this.checkData();
    },
    inputStatus: function (val) {
      if (val == "") {
        this.dialogNewData = this.dialogData;
      } else {
        this.dialogNewData = this.searchStatus(val);
      }
      this.checkData();
    },
    dialogVisible: function () {
      console.log(this.dialogVisible);
      this.visible = this.dialogVisible;
      this.dialogNewData = this.dialogData;

      this.checkData();
    },
  },
  mounted() {},
};

