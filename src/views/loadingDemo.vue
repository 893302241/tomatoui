<!--
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-26 10:12:43
 * @LastEditors: you
 * @LastEditTime: 2021-12-15 19:03:31
-->
<template>
  <div id="tomatoui-preview-loading">
    <div>
      <h4>Loading 类型</h4>
      <p>
        <tt-loading type="circle"></tt-loading>
        <tt-loading type="wave"></tt-loading>
        <tt-loading type="cube"></tt-loading>
        <tt-loading type="rect"></tt-loading>
        <tt-loading type="disappear"></tt-loading>
      </p>
      <h4>Loading 颜色</h4>
      <p>
        <tt-loading type="circle" color="#16c2c2"></tt-loading>
        <tt-loading type="wave" color="#9266f9"></tt-loading>
        <tt-loading type="cube" color="green"></tt-loading>
        <tt-loading type="rect" color="#9266f9"></tt-loading>
        <tt-loading type="disappear" color="#9266f9"></tt-loading>
      </p>
      <h4>Loading 大小</h4>
      <p>
        <tt-loading type="circle" size="mini"></tt-loading>
        <tt-loading type="wave" size="small"></tt-loading>
        <tt-loading type="cube" size="large"></tt-loading>
        <tt-loading type="rect"></tt-loading>
        <tt-loading type="disappear"></tt-loading>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
h4 {
  margin-bottom: 10px;
}
p {
  display: flex;
  .tt-loading {
    margin-right: 18px;
  }
}
</style>
