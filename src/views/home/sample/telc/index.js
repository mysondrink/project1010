import MyDialog from "@/components/dialog/index.vue";
import MyPage from "@/components/pagination/index.vue";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            formInline: {
                position: "",
                sample_id: "",
            },
            PageSize: null,
            tableNewData: [], //过滤后数据，包括分页、查询
            tableData: [], //展示数据
            tableOri: [], //原始数据
            targetList: null,
            dialogVisible: false,
            // searchItem: {
            //     controller_type: "轨道",
            // },
            dialogTitle: "执行进度",
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
                    prop: "sample_id",
                    label: "样本编号",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "sample_code",
                    label: "条形码",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "created_time",
                    label: "开始时间",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "sample_status",
                    label: "状态",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "position",
                    label: "当前位置(C)",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "target",
                    label: "目标位置(C)",
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
        ...mapActions("userModule", { carTable: "carinfo" }),
        submitSearch() {
            if (this.formInline.position != "") {
                // 只查询状态
                this.tableData = this.tableOri.filter((item) => {
                    if (item.position == this.formInline.position) {
                        return item;
                    }
                });
            };
            if (this.formInline.sample_id != "") {
                // 只查询编号
                this.tableData = this.tableOri.filter((item) => {
                    if (item.sample_id == this.formInline.sample_id) {
                        return item;
                    }
                });
            };
            this.tableNewData = this.tableData;
        },
        clearSearch() {
            this.formInline.sample_id = "";
            this.formInline.position = "";
            this.tableNewData = this.tableOri;
        },
        getTableData(val) {
            // console.log(val);
            this.tableData = val;
        },
        showDetail() {
            console.log("detail!");
            this.dialogVisible = true;
            // this.dialogNewData = this.dialogData;
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
                        data[index].sample_status = "正在充电";
                        break;
                    case "trans":
                        data[index].sample_status = "正在运输";
                        break;
                }
                data[index].created_time = this.formattedTime(data[index].created_at);
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
        formattedTime(val) {  
            const date = new Date(val);  
            const year = date.getFullYear();  
            const month = date.getMonth() + 1; // JavaScript的月份是从0开始的，所以需要+1  
            const day = date.getDate();  
            const hours = date.getHours();  
            const minutes = date.getMinutes();  
            const seconds = date.getSeconds();  
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;  
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