/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-29 17:27:36
 * @LastEditors: you
 * @LastEditTime: 2021-12-02 15:17:45
 */
import button from './src/main.vue'

// eslint-disable-next-line func-names
button.install = function (Vue) {
  Vue.component('tt-button', button)
}

export default { ...button, name: 'tt-button' }
