import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Home.vue'),
  },
  {
    /**
     * 匹配任意路径
     */
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/exception/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
