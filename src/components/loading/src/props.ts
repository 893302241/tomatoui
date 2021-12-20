/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-07 12:50:46
 * @LastEditors: you
 * @LastEditTime: 2021-12-15 16:53:25
 */
import { PropType } from 'vue'

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export type LoadingSize = 'normal' | 'mini' | 'small' | 'large'
export const validatorType = function (type: string) {
  return ['circle', 'wave', 'cube', 'rect', 'disappear'].includes(type)
}
export const validatorSize = function (size: string) {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}
export const props = {
  type: {
    type: String as PropType<LoadingType>,
    default: 'circle',
    validator: validatorType
  },
  size: {
    type: String as PropType<LoadingSize>,
    default: 'normal',
    validator: validatorSize
  },
  radius: {
    type: [String, Number],
    default: 30
  },
  color: {
    type: String,
    default: 'currentColor'
  }
}
