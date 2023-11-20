export default {
    data() {
        return {
            formInline: {
                user: "",
                region: "",
            },
            tableData: [
                {
                    mtype: "BM",
                    wtype: "BM-1",
                    wsample: "1",
                    id: "4396",
                    col: "12",
                    detail: "详情",
                },
                {
                    mtype: "BM",
                    wtype: "BM-1",
                    wsample: "1",
                    id: "4396",
                    col: "12",
                    detail: "详情",
                },
                {
                    mtype: "BM",
                    wtype: "BM-1",
                    wsample: "1",
                    id: "4396",
                    col: "12",
                    detail: "详情",
                },
                {
                    mtype: "BM",
                    wtype: "BM-1",
                    wsample: "1",
                    id: "4396",
                    col: "12",
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