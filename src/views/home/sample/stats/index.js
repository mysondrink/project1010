export default {
    data() {
        return {
            formInline: {
                num: "",
                code: "",
                stats: "",
                intime: "",
                inpos: "",
                priority: "",
                module: "",
                region: "",
            },
            tableData: [
                {
                    task: "取出",
                    sarea: "AM",
                    stime: "2023-10-24 19:00",
                    tararea: "SM",
                    artime: "2023-10-24 19:00",
                    duration: "1:00",
                    detail: "详情",
                },
                {
                    task: "取出",
                    sarea: "AM",
                    stime: "2023-10-24 19:00",
                    tararea: "SM",
                    artime: "2023-10-24 19:00",
                    duration: "1:00",
                    detail: "详情",
                },
            ],
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
    },
};