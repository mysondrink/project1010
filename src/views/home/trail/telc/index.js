import { mapActions } from "vuex";
import MyDialog from "@/components/dialog/index.vue";
import MyPage from "@/components/pagination/index.vue";

export default {
  data() {
    return {
      formInline: {
        trail_type: "",
        status: "",
      },
      tableNewData: [],
      tableData: [], //展示数据
      tableOri: [], //原始数据
      dialogVisible: false,
      PageSize: 10,
      searchItem: {
        controller_type: "轨道",
      },
      dialogTitle: "通信详情",
      dialogData: [
        {
          sample_id: 1,
          create_time: "2023",
          sample_status: "充电",
          rates: "1%",
        },
        {
          sample_id: 2,
          create_time: "2023",
          sample_status: "充电",
          rates: "2%",
        },
        {
          sample_id: 3,
          create_time: "2023",
          sample_status: "运输",
          rates: "1%",
        },
        {
          sample_id: 4,
          create_time: "2023",
          sample_status: "充电",
          rates: "3%",
        },
        {
          sample_id: 3,
          create_time: "2023",
          sample_status: "运输",
          rates: "1%",
        },
        {
          sample_id: 4,
          create_time: "2023",
          sample_status: "充电",
          rates: "3%",
        },
        {
          sample_id: 3,
          create_time: "2023",
          sample_status: "传输",
          rates: "1%",
        },
        {
          sample_id: 4,
          create_time: "2023",
          sample_status: "充电",
          rates: "3%",
        },
      ],
      detailColumnTitle: [
        {
          prop: "sample_id",
          label: "样本编号",
          align: "center",
        },
        {
          prop: "create_time",
          label: "下发时间",
          align: "center",
        },

        {
          prop: "sample_status",
          label: "状态",
          align: "center",
        },
        {
          prop: "rates",
          label: "丢包率",
          align: "center",
        },
      ],
      dialogType: 4,
      columnTitle: [
        {
          prop: "controller_type",
          label: "控制器类型",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "module_type",
          label: "模块类型",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "controller_id",
          label: "ID号",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "ttype",
          label: "通信方式",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "tx_status",
          label: "TX状态",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "rx_status",
          label: "RX状态",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "rates",
          label: "丢包率",
          minwidth: "180",
          align: "center",
        },
        {
          prop: "detail",
          label: "详情",
          minwidth: "180",
          align: "center",
        },
      ],
      // currentPage: 1,
    };
  },
  methods: {
    ...mapActions("userModule", { trailTable: "trailinfo" }),
    submitSearch() {
      if (this.formInline.status != "") {
        // 只查询状态
        this.tableData = this.tableData.filter((item) => {
          if (item.status == this.formInline.status) {
            return item;
          }
        });
      };
      if (this.formInline.trail_type != "") {
        // 只查询名称
        this.tableData = this.tableData.filter((item) => {
          if (item.trail_type == this.formInline.trail_type) {
            return item;
          }
        });
      };
      this.tableNewData = this.tableData;
    },
    clearSearch() {
      this.formInline.trail_type = "";
      this.formInline.status = "";
      this.tableNewData = this.tableOri;
    },
    getTable() {
      this.trailTable(this.searchItem)
        .then((res) => {
          if (res.data.code == "200" && res.data.data.data != null) {
            this.checkData(res.data.data.data);
          }
        })
        .catch((err) => {
          this.$router.push('/404');
          console.log("err: ", err.response.data.msg);
        });
    },
    // 将状态转为汉字
    checkData(data) {
      for (let index = 0; index < data.length; index++) {
        switch (data[index].status) {
          case "success":
            data[index].status = "正常";
            break;
          case "warning":
            data[index].status = "警告";
            break;
          case "danger":
            data[index].status = "错误";
            break;
        }
        data[index].sum = data[index].charge_area + data[index].trans_area;
        data[index].module_type = "-";
      }
      this.tableOri = data;
      this.tableData = this.tableOri;
      //   this.tableNewData = data;
      for (let index = 0; index < 100; index++) {
        this.tableData.push(data[1]);
      }
      this.tableNewData = this.tableData;
    },
    showDetail() {
      console.log("detail!");
      this.dialogVisible = true;
      // this.dialogNewData = this.dialogData;
    },
    getTableData(val) {
      this.tableData = val;
    },
  },
  mounted() {
    this.getTable();
  },
  components: {
    MyDialog,
    MyPage,
  },
};
