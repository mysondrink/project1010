<template>
  <div>
    <!-- 无子集 -->
    <el-menu-item :index="basePath" v-if="!item.child">
      <i></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>

    <!-- 有子集 -->
    <el-submenu :index="basePath" v-else>
      <template slot="title">
        <i :class="item.icon"></i>{{ item.name }}</template
      >
      <!-- 循环调用 -->
      <NavItem
        v-for="sub in item.child"
        :keys="sub.url"
        :item="sub"
        :basePath="sub.url"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  data() {
    return {};
  },
  methods: {},
  props: ["item", "basePath"], // 子接收到父的数据
};
</script>

<style scoped>
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