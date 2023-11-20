import MyDialog from "@/components/dialog/index.vue";
import MyPage from "@/components/pagination/index.vue";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            formInline: {
                car_id: "",
                status: "",
                target: "",
            },
            PageSize: null,
            tableNewData: [], //过滤后数据，包括分页、查询
            tableData: [], //展示数据
            tableOri: [], //原始数据
            dialogVisible: false,
            searchItem: {
                controller_type: "轨道",
            },
            targetList: [],
            dialogTitle: "运输车详情",
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
            tableOri: [],
            dialogType: 5,
            columnTitle: [
                {
                    prop: "car_tag",
                    label: "",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "car_id",
                    label: "编号",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "car_status",
                    label: "状态",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "power",
                    label: "电池(%)",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "target",
                    label: "目标(C)",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "position",
                    label: "最近位置",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "sample_id",
                    label: "样本编号",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "sample_code",
                    label: "样本条形码",
                    minwidth: "100",
                    align: "center",
                },
                {
                    prop: "detail",
                    label: "详情",
                    minwidth: "100",
                    align: "center",
                },
            ],
        };
    },
    methods: {
        ...mapActions("userModule", { carTable: "carinfo" }),
        getTableData(val) {
            // console.log(val);
            this.tableData = val;
        },
        clearSearch() {
            this.formInline.car_id = "";
            this.formInline.status = "";
            this.formInline.target = "";
            this.tableNewData = this.tableOri;
        },
        showDetail() {
            console.log("detail!");
            this.dialogVisible = true;
            // this.dialogNewData = this.dialogData;
        },
        submitSearch() {
            if (this.formInline.car_id != "") {
                // 只查询名称
                this.tableData = this.tableData.filter((item) => {
                    if (item.car_id == this.formInline.car_id) {
                        return item;
                    }
                });
            };
            if (this.formInline.status != "") {
                // 只查询状态
                this.tableData = this.tableData.filter((item) => {
                    if (item.status == this.formInline.status) {
                        return item;
                    }
                });
            };
            if (this.formInline.target != "") {
                // 只查询目标
                this.tableData = this.tableData.filter((item) => {
                    if (item.target == this.formInline.target) {
                        return item;
                    }
                });
            };
            this.tableNewData = this.tableData;
        },
        // 发送请求
        getTable() {
            this.carTable()
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
            let targetList = []
            for (let index = 0; index < data.length; index++) {
                switch (data[index].status) {
                    case "charge":
                        data[index].car_status = "正在充电";
                        break;
                    case "trans":
                        data[index].car_status = "正在运输";
                        break;
                }
                targetList.push(data[index].target)
            }
            this.targetList = [...new Set(targetList)];
            this.tableOri = data;
            this.tableData = this.tableOri;
            //   this.tableNewData = data;
            for (let index = 0; index < 100; index++) {
                this.tableData.push(data[1]);
            }
            this.tableNewData = this.tableData;
        },
    },
    mounted() {
        this.PageSize = 10;
        this.getTable();
        // this.tableData = this.tableOri;
    },
    components: {
        MyDialog,
        MyPage,
    },
};