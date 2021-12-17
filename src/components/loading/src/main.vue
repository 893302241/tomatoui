<!--
 * @Description:加载组件
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-06 18:10:31
 * @LastEditors: you
 * @LastEditTime: 2021-12-17 16:43:34
-->
<template>
  <div class="tt-loading">
    <div class="tt-loading-circle" v-if="type === 'circle'">
      <span
        class="tt-loading-circle-block"
        :style="{ width: Number(radius) + 'px', height: Number(radius) + 'px' }"
      >
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </span>
    </div>
    <template v-for="(nums, key) in loadingTypeMap">
      <div
        v-if="type === key"
        :key="nums + key"
        :class="`tt-loading-${key} tt-loading-${key}-${size}`"
      >
        <div
          v-for="num in nums"
          :key="num + key"
          :style="{ backgroundColor: color }"
          :class="`tt-loading-${key}-item tt-loading-${key}-item-${size}`"
        ></div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { props } from './props.ts'

defineProps(props)

const loadingTypeMap = {
  wave: 5,
  cube: 4,
  rect: 8,
  disappear: 3
}
</script>
<style lang="less" scoped>
@import './loading.less';
</style>
