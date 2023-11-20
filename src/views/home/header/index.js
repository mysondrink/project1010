import { mapActions } from "vuex";
import breadcrumb from "@/components/breadcrunmb/index.vue";
export default {
    data() {
        return {
            input: "",
        };
    },
    components: {
        breadcrumb,
    },
    methods: {
        handleCommand(command) {
            switch (command) {
                case "logout":
                    mapActions("userModule", ["logout"]);
                    this.$message({
                        message: "登出成功",
                        type: "success",
                    });
                    this.$router.replace("/login");
                    break;

                default:
                    break;
            }
        },

        turnToHome() {
            const currentRoute = this.$router.history.current.path; // 获取当前路由
            const targetRoute = "/index"; // 目标路由，根据实际情况修改

            if (currentRoute !== targetRoute) {
                this.$router.push(targetRoute); // 如果当前路由不是目标路由，进行页面跳转
            }
        },
    },
};