<!--
 * @Description:按钮组件
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-29 18:52:02
 * @LastEditors: you
 * @LastEditTime: 2021-12-20 09:54:37
-->
<template>
  <button class="tt-btn tt-btn--normal" :class="dyClass" @click.stop="onClick">
    <tt-loading v-if="loading" class="tt-btn--loading" :type="loadingType"></tt-loading>
    <div class="tt-btn-loading-content" v-if="loading"></div>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'
import prop from './props.ts'
import { loading as ttLoading } from '../../loading/index.ts'

const props = defineProps(prop)
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
const emitClick = defineEmits(['click'])
const onClick = (e: unknown) => {
  emitClick('click', e)
}
</script>
<style lang="less">
@import '@/assets/style/common.less';
@import './button.less';
</style>
