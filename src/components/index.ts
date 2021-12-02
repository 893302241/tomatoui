/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-02 14:21:02
 * @LastEditors: you
 * @LastEditTime: 2021-12-02 17:13:19
 */
import Button from '@/components/button/index'

const components = [Button]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '0.0.1',
  install,
  Button
}
