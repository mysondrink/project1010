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
import indexjs from "./index.js";
export default {
  ...indexjs,
};
</script>

<style lang="less" scoped>
@import "./index.css";
</style>
