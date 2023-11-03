
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
