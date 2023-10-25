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

        <el-col :span="1"
          ><div>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar></div
        ></el-col>
      </el-row>
    </div>
    <div>
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="app-breadcrumb"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>状态</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
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

.app-breadcrumb{
  height: 30px;
  background-color: #F3F4F7;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 20px;
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
</style>
