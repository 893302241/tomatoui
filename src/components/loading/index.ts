/*
 * @Description:加载组件
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-06 12:33:29
 * @LastEditors: you
 * @LastEditTime: 2021-12-17 16:48:58
 */
import loading from './src/main.vue'

loading.install = function (Vue) {
  Vue.component('tt-loading', loading)
}

export default { ...loading, name: 'tt-loading' }
export { loading }
