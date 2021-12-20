/*
 * @Description:button props
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-15 19:35:51
 * @LastEditors: you
 * @LastEditTime: 2021-12-15 20:11:06
 */
import { PropType } from 'vue'
import { IThemeType } from '@/shared/type'
import { props } from '../../loading/src/props.ts'

export default {
  disabled: { type: Boolean, default: false },
  outline: Boolean,
  text: Boolean,
  size: { type: String as PropType<'mini' | 'small' | 'large' | 'normal'>, default: 'normal' },
  type: { type: String as PropType<IThemeType | 'mode'>, default: 'normal' },
  loading: { type: Boolean, default: false },
  loadingType: props.type
}
