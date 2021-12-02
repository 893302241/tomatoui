<!--
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-29 18:52:02
 * @LastEditors: you
 * @LastEditTime: 2021-12-01 18:02:07
-->
<template>
  <button :class="dyClass"><slot></slot></button>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue'
import { IThemeType } from '@/shared/type'

const props = defineProps({
  type: { type: String as PropType<IThemeType | 'mode'>, default: 'normal' }
})
const dyClass = computed(() => {
  return {
    'tt-btn-primary': props.type === 'primary',
    'tt-btn-success': props.type === 'success',
    'tt-btn-danger': props.type === 'danger',
    'tt-btn-warning': props.type === 'warning',
    'tt-btn-noble': props.type === 'noble',
    'tt-btn-mode': props.type === 'mode',
    'tt-btn-info': props.type === 'info',
    'tt-btn-normal': props.type === 'normal' || !props.type
  }
})
</script>
<style lang="scss" scoped>
.tt-btn {
}
</style>
