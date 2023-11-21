import MyDialog from "@/components/dialog/index.vue"
export default {
    data() {
        return {
            detailColumnTitle: [],
            dialogType: 5,
            dialogData: [],
            dialogTitle: "样本详情",
            dialogVisible: false,
            descriptions: [
                {
                    label: "样本编号",
                    value: 111,
                },
                {
                    label: "条形码",
                    value: 112,
                },
                {
                    label: "状态",
                    value: 113,
                },
                {
                    label: "进入日期",
                    value: 114,
                },
                {
                    label: "进入位置",
                    value: 115,
                },
                {
                    label: "优先级",
                    value: 116,
                },
                {
                    label: "位置",
                    value: 117,
                },
                {
                    label: "区域",
                    value: 118,
                },
                {
                    label: "下载位置",
                    value: 119,
                },
            ],
            tableData: [
                {
                    task: "取出",
                    position: "AM",
                    created_at: "2023-10-24 19:00",
                    target: "SM",
                    updated_at: "2023-10-24 19:00",
                    time2start: "1:00",
                    detail: "详情",
                },
                {
                    task: "取出",
                    position: "AM",
                    created_at: "2023-10-24 19:00",
                    target: "SM",
                    updated_at: "2023-10-24 19:00",
                    time2start: "1:00",
                    detail: "详情",
                },
            ],
            columnTitle: [
                {
                    prop: "task",
                    label: "任务",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "position",
                    label: "开始区域",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "created_at",
                    label: "开始时间",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "target",
                    label: "目标区域",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "updated_at",
                    label: "到达时间",
                    minwidth: "180",
                    align: "center",
                },
                {
                    prop: "time2start",
                    label: "时长",
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
        showDetail() {
            console.log("detail!");
            this.dialogVisible = true;
            // this.dialogNewData = this.dialogData;
        },
        returnback() {
            this.$router.push("/sample/stats/search");
        },
        takeoff() {
            this.$message({
                message: "操作成功",
                type: "success",
            });
            this.$router.replace("/sample/stats/search");;
        }
    },
    mounted() {

    },
    components: {
        MyDialog,
    },
};