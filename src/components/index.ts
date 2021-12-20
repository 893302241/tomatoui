/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-02 14:21:02
 * @LastEditors: you
 * @LastEditTime: 2021-12-07 12:40:03
 */
import Button from '@/components/button/index'
import Loading from '@/components/loading/index'

const components = [Button, Loading]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '0.0.1',
  install,
  Button,
  Loading
}
