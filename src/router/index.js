import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/login',
  },
  // 登录主页
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/login/index.vue'),
    children: [
      {
        //登录页
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
      },
      {
        //注册页
        path: '/register',
        name: 'register',
        component: () => import('../views/register/register.vue')
      },
    ]
  },
  {
    // 布局页
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        // 首页
        path: '/index',
        name: 'index',
        component: () => import('../views/home/index/index.vue')
      },
      {
        // 轨道管理
        path: '/trail',
        name: 'trail',
        component: () => import('../views/home/trail/index.vue'),
        children: [
          {
            // 轨道状态
            path: '/trail/stats',
            name: 'trailStats',
            component: () => import('../views/home/trail/stats/index.vue'),
          },
          {
            // 通信状态
            path: '/trail/telc',
            name: 'trailTelc',
            component: () => import('../views/home/trail/telc/index.vue'),
          },
          {
            // 布局状态
            path: '/trail/layout',
            name: 'trailLayout',
            component: () => import('../views/home/trail/layout/index.vue'),
          },
        ],
      },
      {
        // 模块管理
        path: '/module',
        name: 'module',
        component: () => import('../views/home/module/index.vue'),
        children: [
          {
            // 模块状态
            path: '/module/stats',
            name: 'moduleStats',
            component: () => import('../views/home/module/stats/index.vue'),
          },
          {
            // 通信状态
            path: '/module/telc',
            name: 'moduleTelc',
            component: () => import('../views/home/module/telc/index.vue'),
          },
        ]
      },
      {
        // 样本管理
        path: '/sample',
        name: 'sample',
        component: () => import('../views/home/sample/index.vue'),
        children: [
          {
            // 样本搜索
            path: '/sample/stats',
            name: 'sampleStats',
            component: () => import('../views/home/sample/stats/index.vue'),
          },
          {
            // 样本搜索栏
            path: '/sample/stats1',
            name: 'sampleStats1',
            component: () => import('../views/home/sample/stats/search.vue'),
          },
          {
            // 执行进度
            path: '/sample/telc',
            name: 'sampleTelc',
            component: () => import('../views/home/sample/telc/index.vue'),
          },
          {
            // 样本处理
            path: '/sample/proc',
            name: 'sampleProc',
            component: () => import('../views/home/sample/proc/index.vue'),
          },
          {
            // 样本取出
            path: '/sample/malt',
            name: 'sampleMalt',
            component: () => import('../views/home/sample/malt/index.vue'),
          },
        ]
      },
      {
        // 运输车管理
        path: '/car',
        name: 'car',
        component: () => import('../views/home/car/index.vue'),
        children: [
          {
            // 运输车搜索
            path: '/car/stats',
            name: 'carStats',
            component: () => import('../views/home/car/stats/index.vue'),
          },
          {
            // 等待队列
            path: '/car/telc',
            name: 'carTelc',
            component: () => import('../views/home/car/telc/index.vue'),
          },
        ]
      },
      {
        // 系统设置
        path: '/sys',
        name: 'sys',
        component: () => import('../views/home/sys/index.vue'),
        children: [
          {
            // 一级功能
            path: '/sys/sys1',
            name: 'sys1',
            component: () => import('../views/home/sys/sys1/index.vue'),
          },
          {
            // 二级功能
            path: '/sys/sys2',
            name: 'sys2',
            component: () => import('../views/home/sys/sys2/index.vue'),
          },
        ]
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
