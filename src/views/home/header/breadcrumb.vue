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
export default {
  name: "breadcrumb",
  methods: {
    getBreadcrumb(matched){
      if(matched.length && matched[1].name=="index") {
        matched = [{path:"/home", name:"home", meta:{title:"首页"}}];
      }
      this.lists = matched;
    },
  },
  components: {},
  watch: {
    $route(to, from) {
      this.getBreadcrumb(to.matched);
      // this.lists = to.matched;
    },
  },
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    this.getBreadcrumb(this.$route.matched);
    // this.lists = this.$route.matched;
  },
};
</script>

<style scoped>
.app-breadcrumb {
  height: 30px;
  background-color: #f3f4f7;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 20px;
}
</style>