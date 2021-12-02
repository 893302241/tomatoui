/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-29 17:27:36
 * @LastEditors: you
 * @LastEditTime: 2021-12-01 18:04:57
 */
import button from './src/main.vue'

// eslint-disable-next-line func-names
button.install = function (Vue) {
  Vue.component(button.name, button)
}

export default button
