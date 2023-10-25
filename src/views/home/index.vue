<template>
  <div class="home">
    <el-container>
      <!-- 左侧导航栏 -->
      <navMenu />
      <el-container>
        <!-- 右侧主体部分 -->
        <!-- 头部 -->
        <el-header>
          <headerMenu />
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from "./nav/index.vue";
import headerMenu from "./header/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    navMenu,
    headerMenu,
  },
};
</script>

<style lang='less' scoped>
.el-header {
  width: 100%;
  min-width: 1000px;
  min-height: 150px;
  padding: 0;
}

.el-main {
  background-color: #f3f4f7;
  min-width: 1080px;
}

// .main{
//   background-color: #FFFFFF;
//   padding-top: 10px;
//   padding-bottom: 40px;
//   padding-left: 40px;
//   padding-right: 40px;
//   min-height: 800px;
// }
</style>