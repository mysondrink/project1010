
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
          ttype: "TCP/IP",
          telec: "common",
          receive: "common",
          rate: "2%",
          detail: "详情",
        },
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          ttype: "TCP/IP",
          telec: "common",
          receive: "common",
          rate: "2%",
          detail: "详情",
        },
        {
          ctype: "轨道",
          mtype: "-",
          id: "Rail-1",
          ttype: "TCP/IP",
          telec: "common",
          receive: "common",
          rate: "2%",
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
