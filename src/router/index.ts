/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-26 10:10:43
 * @LastEditors: you
 * @LastEditTime: 2021-12-07 12:43:41
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Button from '@/views/buttonDemo.vue'
import loading from '@/views/loadingDemo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/loading',
    name: 'loading',
    component: loading
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
