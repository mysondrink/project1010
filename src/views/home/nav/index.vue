<template>
  <el-aside class="leftNav">
    <div class="titleLabel">
      <img class="titleImg" src="@/assets/title.png" />
    </div>
    <div class="left-menu">
      <el-menu
        :default-active="$route.path"
        exact
        class="el-menu-vertical-demo"
        router
        unique-opened
      >
        <NavItem v-for="v in items" :keys="v.url" :item="v" :basePath="v.url" />
      </el-menu>
    </div>
    <div class="updateLabel">
      <img class="updateImg" src="@/assets/update.png" />
    </div>
  </el-aside>
</template>

<script>
import NavItem from "./navItem"; // 子组件

export default {
  data() {
    return {
      items: [
        {
          name: "轨道管理",
          url: "/trail",
          icon: "el-icon-trail",
          child: [
            { name: "轨道状态", url: "/trail/stats" },
            { name: "通信状态", url: "/trail/telc" },
            { name: "布局", url: "/trail/layout" },
          ],
        },
        {
          name: "模块管理",
          url: "/module",
          icon: "el-icon-module",
          child: [
            { name: "模块状态", url: "/module/stats" },
            { name: "通信状态", url: "/module/telc" },
          ],
        },
        {
          name: "样本管理",
          url: "/sample",
          icon: "el-icon-sample",
          child: [
            { name: "样本搜索", url: "/sample/stats1" },
            { name: "执行进度", url: "/sample/telc" },
            { name: "样本处理", url: "/sample/proc" },
            { name: "样本取出", url: "/sample/malt" },
          ],
        },
        {
          name: "运输车管理",
          url: "/car",
          icon: "el-icon-car",
          child: [
            { name: "运输车搜索", url: "/car/stats" },
            { name: "等待队列", url: "/car/telc" },
          ],
        },
        {
          name: "系统设置",
          url: "/sys",
          icon: "el-icon-sys",
          child: [
            { name: "一级功能", url: "/sys/sys1" },
            { name: "二级功能", url: "/sys/sys2" },
          ],
        },
      ],
    };
  },
  methods: {},
  components: {
    NavItem,
  },
};
</script>

<style>
.el-aside {
  position: relative; /* 设置父元素为相对定位 */
  width: 264px !important;
  overflow: hidden;
  overflow-y: hidden;
}

.titleLabel {
  width: 264px;
  height: 100px;
  background: #5593f9;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}
.titleImg {
  position: absolute; /* 设置img组件为绝对定位 */
  top: 25px;
}
.updateLabel {
  position: absolute; /* 设置img组件为绝对定位 */
  left: 17px;
  top: 720px;
}

.el-menu-item {
  font-size: 20px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400; /*字体粗细*/
  text-align: center;
  color: #979898;
}

.el-menu-item.is-active {
  margin-right: 30px;
  margin-left: 30px;
  background-color: #4285f4 !important;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
}

.el-submenu .el-submenu__title {
  font-size: 20px;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-weight: 400;
  text-align: center;
}

.el-menu {
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

.left-menu {
  padding-top: 50px;
  padding-bottom: 100px;
}
</style>
