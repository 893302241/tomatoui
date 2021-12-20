/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-03 09:52:05
 * @LastEditors: you
 * @LastEditTime: 2021-12-03 15:01:36
 */
import { mount } from '@vue/test-utils'
import button from '../src/main.vue'

test('buttonStyle', () => {
  const wrapper = mount(button, {
    props: {
      type: 'success',
      size: 'mini'
    },
    slots: {
      default: () => 'button style'
    }
  })
  expect(wrapper.classes()).toContain('tt-btn--success')
  expect(wrapper.classes()).toContain('tt-btn--mini')
  expect(wrapper.text()).toBe('button style')
  wrapper.unmount()
})
