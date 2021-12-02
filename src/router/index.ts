/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-26 10:10:43
 * @LastEditors: you
 * @LastEditTime: 2021-12-02 17:18:36
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Button from '@/views/buttonDemo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/button',
    name: 'button',
    component: Button
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
