import MyPage from "@/components/pagination/index.vue"
import MyDialog from "@/components/dialog/index.vue"
import { mapActions } from "vuex";
export default {
    data() {
        return {
            formInline: {
                user: "",
                region: "",
            },
            PageSize: null,
            tableNewData: [],
            tableData: [], //展示数据
            tableOri: [], //原始数据
            dialogVisible: false,
            currentPage: 1,
            searchItem: {
                controller_type: "模块",
            },
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
                    sample_status: "运输",
                },
                {
                    sample_id: 5,
                    create_time: "2023",
                    user: "李",
                    sample_status: "充电",
                },
                {
                    sample_id: 1,
                    create_time: "2023",
                    user: "李",
                    sample_status: "充电",
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
                    prop: "user",
                    label: "操作人",
                    align: "center",
                },
                {
                    prop: "sample_status",
                    label: "状态",
                    align: "center",
                },
                {
                    prop: "malt",
                    label: "操作",
                    align: "center",
                },
            ],
            dialogType: 5,
            columnTitle: [
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
                    prop: "waste_rates",
                    label: "垃圾容量",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "sum",
                    label: "试剂容量",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "end_time",
                    label: "剩余时间",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "status",
                    label: "状态",
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

        };
    },
    methods: {
        ...mapActions("userModule", { moduleTable: "moduleinfo" }),
        submitSearch() {
            if (this.formInline.module_type != "" && this.formInline.status != "") {
                // 查询名称和状态
                this.tableData = this.tableOri.filter((item) => {
                    if (
                        item.module_type == this.formInline.module_type &&
                        item.status == this.formInline.status
                    ) {
                        return item;
                    }
                });
            } else if (this.formInline.status != "") {
                // 只查询状态
                this.tableData = this.tableOri.filter((item) => {
                    if (item.status == this.formInline.status) {
                        return item;
                    }
                });
            } else if (this.formInline.module_type != "") {
                // 只查询名称
                this.tableData = this.tableOri.filter((item) => {
                    if (item.module_type == this.formInline.module_type) {
                        return item;
                    }
                });
            } else {
                return;
            }
            this.tableNewData = this.tableData;
        },
        clearSearch() {
            this.formInline.module_type = "";
            this.formInline.status = "";
            this.tableNewData = this.tableOri;
        },
        getTable() {
            this.moduleTable(this.searchItem)
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
                // data[index].module_type = "-";
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
            // console.log(val);
            this.tableData = val;
        },
    },
    mounted() {
        this.PageSize = 10;
        this.getTable();
    },
    components: {
        MyDialog,
        MyPage,
    },
};