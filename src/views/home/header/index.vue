<template>
  <div class="header">
    <div class="headerMenu">
      <el-row :gutter="20">
        <el-col :span="1"
          ><el-button class="el-icon-myhome" @click="turnToHome()"></el-button
        ></el-col>

        <el-col :span="1"
          ><el-button class="el-icon-mymenu"></el-button
        ></el-col>

        <el-col :span="4" :offset="16"
          ><el-input
            class="toSearch"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input"
          >
          </el-input
        ></el-col>

        <el-col :span="1"
          ><el-badge is-dot class="item">
            <el-button class="el-icon-mes"></el-button> </el-badge
        ></el-col>

        <el-col :span="1">
          <el-dropdown
            class="avatar-container right-menu-item hover-effect"
            @command="handleCommand"
          >
            <div class="avatar-wrapper">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                class="user-avatar"
              />
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divided command="logout">
                <span style="display: block">登出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <div>
      <breadcrumb />
    </div>
  </div>
</template>

<script>
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
          this.$router.replace("./login");
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
</script>

<style lang="less" scoped>
.headerMenu {
  height: 100px;
}

.el-col {
  margin-top: 40px;
  border-radius: 4px;
}

// 样式穿透 /deep/ or >>>
.toSearch /deep/ .el-input__inner {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px 30px 30px 30px;
  opacity: 1;
  border: 1px solid #979797;
  font-size: 20px;
}

.el-button {
  background-color: #4285f4;
  border: none;
}

.el-icon-myhome {
  background: url("@/assets/home-icon.png") center center no-repeat;
}

.el-icon-myhome:before {
  content: " ";
  visibility: hidden;
}

.el-icon-mymenu {
  background: url("@/assets/menu-icon.png") center center no-repeat;
}

.el-icon-mymenu:before {
  content: " ";
  visibility: hidden;
}

.el-icon-mes {
  background: url("@/assets/mes-icon.png") center center no-repeat;
}

.el-icon-mes:before {
  content: " ";
  visibility: hidden;
}

.headerMenu {
  background: #4285f4;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}

.avatar-container {
  margin-right: 30px;

  .avatar-wrapper {
    margin-top: 5px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}
</style>
