export default {
  data() {
    return {
      tableOri: [], //接收到的数据
      tableData: [], //原始数据
      tableNewData: [], //展示的数据
      currentPage: 1,
      PageLength: null,
      totalData: null,
    };
  },
  props: {
    pageData: {
      defualt: null,
    },
    PageSize: {
      default: 5,
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      let tableNewData = [];
      let num = this.PageSize * (val - 1);
      let temp = this.PageSize;
      if (this.totalData - num < temp) {
        temp = this.totalData - num;
      }

      for (let index = 0; index < temp; index++) {
        tableNewData.push(this.tableData[num + index]);
      }
      this.tableNewData = tableNewData;
      console.log(tableNewData);
      this.$emit("getTableData", this.tableNewData);
      console.log(`当前页: ${val}`);
    },
    setPage() {
      this.totalData = this.tableData.length;
      this.PageLength = Math.ceil(this.totalData / this.PageSize);
      this.handleCurrentChange(1);
    },
  },
  mounted() {},
  components: {},
  watch: {
    pageData: function () {
      console.log(this.PageSize);
      this.tableOri = this.pageData;
      this.tableData = this.tableOri;
      this.setPage();
    },
  },
};
