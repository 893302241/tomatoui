/*
 * @Description:loading测试
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-08 12:55:36
 * @LastEditors: you
 * @LastEditTime: 2021-12-20 09:51:10
 */
import { mount } from '@vue/test-utils'
import loading from '../src/main.vue'

test('loading size', () => {
  const wrapper = mount(loading, {
    props: {
      size: 'small'
    }
  })
  expect(wrapper.classes()).toContain('tt-loading')
  wrapper.unmount()
})
