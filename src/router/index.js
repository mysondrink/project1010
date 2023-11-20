import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/login',
  },
  {
    path: '/404',
    component: () => import('../views/error-page/index.vue'),
  },
  // 登录主页
  {
    path: '/homepage',
    name: 'homepage',
    redirect: 'login',
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
    meta: { title: '首页' },
    redirect: '/index',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        // 首页
        path: '/index',
        name: 'index',
        meta: { title: '首页' },
        component: () => import('../views/home/index/index.vue')
      },
      {
        // 轨道管理
        path: '/trail',
        name: 'trail',
        meta: { title: '轨道管理' },
        redirect: '/trail/stats',
        component: () => import('../views/home/trail/index.vue'),
        children: [
          {
            // 轨道状态
            path: '/trail/stats',
            name: 'trailStats',
            meta: { title: '轨道状态' },
            component: () => import('../views/home/trail/stats/index.vue'),
          },
          {
            // 通信状态
            path: '/trail/telc',
            name: 'trailTelc',
            meta: { title: '通信状态' },
            component: () => import('../views/home/trail/telc/index.vue'),
          },
          {
            // 布局状态
            path: '/trail/layout',
            name: 'trailLayout',
            meta: { title: '布局状态' },
            component: () => import('../views/home/trail/layout/index.vue'),
          },
        ],
      },
      {
        // 模块管理
        path: '/module',
        name: 'module',
        meta: { title: '模块管理' },
        redirect: '/module/stats',
        component: () => import('../views/home/module/index.vue'),
        children: [
          {
            // 模块状态
            path: '/module/stats',
            name: 'moduleStats',
            meta: { title: '模块状态' },
            component: () => import('../views/home/module/stats/index.vue'),
          },
          {
            // 通信状态
            path: '/module/telc',
            name: 'moduleTelc',
            meta: { title: '通信状态' },
            component: () => import('../views/home/module/telc/index.vue'),
          },
        ]
      },
      {
        // 样本管理
        path: '/sample',
        name: 'sample',
        meta: { title: '样本管理' },
        redirect: '/sample/stats/search',
        component: () => import('../views/home/sample/index.vue'),
        children: [
          {
            // 样本搜索
            path: '/sample/stats',
            name: 'sampleStats',
            meta: { title: '样本搜索' },
            component: () => import('../views/home/sample/stats/index.vue'),
          },
          {
            // 样本搜索栏
            path: '/sample/stats/search',
            name: 'sampleSearch',
            meta: { title: '样本搜索' },
            component: () => import('../views/home/sample/stats/search/index.vue'),
          },
          {
            // 执行进度
            path: '/sample/telc',
            name: 'sampleTelc',
            meta: { title: '执行进度' },
            component: () => import('../views/home/sample/telc/index.vue'),
          },
          {
            // 样本处理
            path: '/sample/proc',
            name: 'sampleProc',
            meta: { title: '样本处理' },
            component: () => import('../views/home/sample/proc/index.vue'),
          },
          {
            // 样本取出
            path: '/sample/malt',
            name: 'sampleMalt',
            meta: { title: '样本取出' },
            component: () => import('../views/home/sample/malt/index.vue'),
          },
        ]
      },
      {
        // 运输车管理
        path: '/car',
        name: 'car',
        meta: { title: '运输车管理' },
        redirect: '/car/stats',
        component: () => import('../views/home/car/index.vue'),
        children: [
          {
            // 运输车搜索
            path: '/car/stats',
            name: 'carStats',
            meta: { title: '运输车搜索' },
            component: () => import('../views/home/car/stats/index.vue'),
          },
          {
            // 等待队列
            path: '/car/telc',
            name: 'carTelc',
            meta: { title: '等待队列' },
            component: () => import('../views/home/car/telc/index.vue'),
          },
        ]
      },
      {
        // 系统设置
        path: '/sys',
        name: 'sys',
        meta: { title: '系统设置' },
        redirect: '/sys/sys1',
        component: () => import('../views/home/sys/index.vue'),
        children: [
          {
            // 一级功能
            path: '/sys/sys1',
            name: 'sys1',
            meta: { title: '一级功能' },
            component: () => import('../views/home/sys/sys1/index.vue'),
          },
          {
            // 二级功能
            path: '/sys/sys2',
            name: 'sys2',
            meta: { title: '二级功能' },
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
