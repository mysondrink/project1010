export default {
  data() {
    return {
      tableOri: [],
      tableData: [], //原始数据
      tableNewData: [], //添加的数据
      currentPage: 1,
      PagaSize: 10,
      PageLength: null,
      totalData: null,
    };
  },
  props: {
    pageData: {
      defualt: null,
    },
  },
  methods: {
    submitSearch() {
      if (this.formInline.trail_type != "" && this.formInline.status != "") {
        // 查询名称和状态
        this.tableData = this.tableData.filter((item) => {
          if (
            item.trail_type == this.formInline.trail_type &&
            item.status == this.formInline.status
          ) {
            return item;
          }
        });
      } else if (this.formInline.status != "") {
        // 只查询状态
        this.tableData = this.tableData.filter((item) => {
          if (item.status == this.formInline.status) {
            return item;
          }
        });
      } else if (this.formInline.trail_type != "") {
        // 只查询名称
        this.tableData = this.tableData.filter((item) => {
          if (item.trail_type == this.formInline.trail_type) {
            return item;
          }
        });
      } else {
        return;
      }
      this.setPage();
    },
    clearSearch() {
      this.formInline.trail_type = "";
      this.formInline.status = "";
      this.tableData = this.tableOri;
      this.setPage();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      let tableNewData = [];
      let num = this.PagaSize * (val - 1);
      let temp = this.PagaSize;
      if (this.totalData - num < temp) {
        temp = this.totalData - num;
      }
      for (let index = 0; index < temp; index++) {
        tableNewData.push(this.tableData[num + index]);
      }
      this.tableNewData = tableNewData;
      this.$emit("getTableData", this.tableNewData);
      console.log(`当前页: ${val}`);
    },
    setPage() {
      this.totalData = this.tableData.length;
      this.PageLength = Math.ceil(this.totalData / this.PagaSize);
      this.handleCurrentChange(1);
    },
  },
  mounted() {},
  components: {},
  watch: {
    pageData: function () {
      this.tableOri = this.pageData;
      this.tableData = this.tableOri;
      this.setPage();
    },
  },
};
