<!--
 * @Description:按钮组件
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-29 18:52:02
 * @LastEditors: you
 * @LastEditTime: 2021-12-02 16:50:39
-->
<template>
  <button class="tt-btn tt-btn--normal" :class="dyClass"><slot></slot></button>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue'
import { IThemeType } from '@/shared/type'

const props = defineProps({
  disabled: Boolean,
  outline: Boolean,
  text: Boolean,
  size: { type: String as PropType<'mini' | 'small' | 'large' | 'normal'>, default: 'normal' },
  type: { type: String as PropType<IThemeType | 'mode'>, default: 'normal' }
})
const dyClass = computed(() => {
  return {
    // 按钮主题
    'tt-btn--primary': props.type === 'primary',
    'tt-btn--success': props.type === 'success',
    'tt-btn--danger': props.type === 'danger',
    'tt-btn--warning': props.type === 'warning',
    'tt-btn--noble': props.type === 'noble',
    'tt-btn--mode': props.type === 'mode',
    'tt-btn--info': props.type === 'info',
    // 按钮大小
    'tt-btn--mini': props.size === 'mini',
    'tt-btn--small': props.size === 'small',
    'tt-btn--large': props.size === 'large',
    // 禁用状态
    'tt-btn--disabled': props.disabled,
    // 文字按钮
    'tt-btn--outline': props.outline,
    'tt-btn--text': props.text
  }
})
</script>
<style lang="less">
@import '@/assets/style/common.less';
@import './button.less';
</style>
