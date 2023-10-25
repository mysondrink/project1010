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
        <!-- 无子集 -->
        <!-- <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item> -->

        <!-- 有子集 -->
        <el-submenu index="/trail">
          <template slot="title">
            <i class="el-icon-trail"></i>轨道管理</template
          >
          <el-menu-item index="/trail/stats">轨道状态</el-menu-item>
          <el-menu-item index="/trail/telc">通信状态</el-menu-item>
          <el-menu-item index="/trail/layout">布局</el-menu-item>
        </el-submenu>

        <el-submenu index="/module">
          <template slot="title">
            <i class="el-icon-module"></i>模块管理</template
          >
          <el-menu-item index="/module/stats">模块状态</el-menu-item>
          <el-menu-item index="/module/telc">通信状态</el-menu-item>
        </el-submenu>

        <el-submenu index="/sample">
          <template slot="title">
            <i class="el-icon-sample"></i>样本管理</template
          >
          <el-menu-item index="/sample/stats1">样本搜索</el-menu-item>
          <el-menu-item index="/sample/telc">执行进度</el-menu-item>
          <el-menu-item index="/sample/proc">样本处理</el-menu-item>
          <el-menu-item index="/sample/malt">样本取出</el-menu-item>
        </el-submenu>

        <el-submenu index="/car">
          <template slot="title">
            <i class="el-icon-car"></i>运输车管理</template
          >
          <el-menu-item index="/car/stats">运输车搜索</el-menu-item>
          <el-menu-item index="/car/telc">等待队列</el-menu-item>
        </el-submenu>

        <el-submenu index="/sys">
          <template slot="title"> <i class="el-icon-sys"></i>系统设置</template>
          <el-menu-item index="/sys/sys1">一级功能</el-menu-item>
          <el-menu-item index="/sys/sys2">二级功能</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="updateLabel">
      <img class="updateImg" src="@/assets/update.png" />
    </div>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
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

.el-icon-module {
  background: url("@/assets/module-icon.png") center center no-repeat;
  /* 图标位置 */
  height: 24px;
  position: absolute;
  top: 30%;
  right: 70% !important;
}

/* content中是中文的Unicode编码； font-size:图标大小； visibility: hidden;来隐藏文字 */
.el-icon-module:before {
  content: " ";
  visibility: hidden;
}

.el-icon-car {
  background: url("@/assets/car-icon.png") center center no-repeat;
  height: 24px;
  position: absolute;
  top: 30%;
  right: 70% !important;
}

.el-icon-car:before {
  content: " ";
  visibility: hidden;
}

.el-icon-trail {
  background: url("@/assets/trail-icon.png") center center no-repeat;
  height: 24px;
  position: absolute;
  top: 30%;
  right: 70% !important;
}

.el-icon-trail:before {
  content: " ";
  visibility: hidden;
}

.el-icon-sample {
  background: url("@/assets/sample-icon.png") center center no-repeat;
  height: 24px;
  position: absolute;
  top: 30%;
  right: 70% !important;
}

.el-icon-sample:before {
  content: " ";
  visibility: hidden;
}

.el-icon-sys {
  background: url("@/assets/sys-icon.png") center center no-repeat;
  height: 24px;
  position: absolute;
  top: 30%;
  right: 70% !important;
}

.el-icon-sys:before {
  content: " ";
  visibility: hidden;
}
</style>
