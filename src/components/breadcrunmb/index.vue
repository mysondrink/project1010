<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="app-breadcrumb">
      <el-breadcrumb-item v-for="v in lists" :key="v.path">
        <router-link :to="v.path"> {{ v.meta.title }} </router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import indexjs from "./index.js";

export default {
  ...indexjs,
};
</script>

<style scoped>
@import "./index.css";
</style>