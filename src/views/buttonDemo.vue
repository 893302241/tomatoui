<!--
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-11-26 10:12:43
 * @LastEditors: you
 * @LastEditTime: 2021-12-17 16:43:22
-->
<template>
  <div id="tomatoui-preview-button">
    <div>
      <h4>主题色按钮</h4>
      <tt-button>默认按钮</tt-button>
      <tt-button type="primary">主要按钮</tt-button>
      <tt-button type="success">成功按钮</tt-button>
      <tt-button type="danger">危险按钮</tt-button>
      <tt-button type="warning">警告按钮</tt-button>
      <tt-button type="info">信息按钮</tt-button>
    </div>
    <div>
      <h4>按钮尺寸</h4>
      <tt-button>默认按钮</tt-button>
      <tt-button size="mini">迷你按钮</tt-button>
      <tt-button size="small">小型按钮</tt-button>
      <tt-button type="large">大型按钮</tt-button>
    </div>
    <div>
      <h4>禁用状态</h4>
      <tt-button>默认按钮</tt-button>
      <tt-button disabled>禁用按钮</tt-button>
    </div>
    <div>
      <h4>加载状态</h4>
      <tt-button loading type="large"></tt-button>
      <tt-button loading loading-type="cube" type="large"></tt-button>
    </div>
    <div>
      <h4>文字按钮</h4>
      <tt-button text>文字按钮</tt-button>
      <tt-button outline @click="handleClick">外边框按钮</tt-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const handleClick = () => {}
</script>
<style lang="less" scoped>
h4 {
  margin-bottom: 10px;
}
.tt-btn {
  margin: 0 10px 10px 0;
}
</style>
