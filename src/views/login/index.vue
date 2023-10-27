<template>
  <div class="main-container">
    <div class="left-container">
      <el-container>
        <router-view />
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.main-container {
  position: relative; /* 设置父元素为相对定位 */
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
  background: url(~@/assets/login_2.jpg);
  background-size: 100% 100%;
  top: 0px; // 这里是设置与顶部的距离
  left: 0px; // 这里是设置与左边的距离
}

.left-container {
  overflow: hidden;
  position: absolute; /* 设置子元素为绝对定位 */
  width: 720px;
  min-width: 720px;
//   height: 100%;
  min-height: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}

.el-container {
  position: absolute;
  top: 20%;
  left: 20%;
}
</style>
