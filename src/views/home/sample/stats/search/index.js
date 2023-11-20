export default {
    data() {
        return {
            formInline: {
                num: "",
                code: "",
            },
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
            this.$router.push("/sample/stats");
        },
    },
};