export default {
    data() {
        return {
            formInline: {
                user: "",
                region: "",
            },
            tableData: [
                {
                    num: "29443",
                    code: "696454246465",
                    time2leave: "1:00",
                    curpos: "SM-1",
                    detail: "详情",
                },
                {
                    num: "29443",
                    code: "696454246465",
                    time2leave: "1:00",
                    curpos: "SM-1",
                    detail: "详情",
                },
                {
                    num: "29443",
                    code: "696454246465",
                    time2leave: "1:00",
                    curpos: "SM-1",
                    detail: "详情",
                },
                {
                    num: "29443",
                    code: "696454246465",
                    time2leave: "1:00",
                    curpos: "SM-1",
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