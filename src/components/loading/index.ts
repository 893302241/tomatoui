/*
 * @Description:加载组件
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-06 12:33:29
 * @LastEditors: you
 * @LastEditTime: 2021-12-06 18:11:39
 */
import loading from './src/main.vue'

loading.install = function (Vue) {
  Vue.component('tt-loading', loading)
}

export default { ...loading, name: 'tt-loading' }
