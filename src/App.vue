<script lang="ts" setup>
import '@/assets/iconfont/iconfont'
import { useRouter } from 'vue-router'

const router = useRouter()
interface componentItem {
  name: string
  type: string
}
const componentMap = [
  {
    name: 'Button 按钮',
    type: 'button'
  }
]
const onNavigate = (item: componentItem) => {
  const { type } = item
  router.push(type)
}
</script>
<template>
  <div id="tomatoui">
    <div class="tomatoui-header">
      <div class="tomatoui-header-left">
        <img class="logo" src="@/assets/logo.svg" />
        <span class="title">tomatoui</span>
      </div>
      <div class="tomatoui-header-right">
        <a
          class="iconfont icon-github github"
          href="https://github.com/893302241/tomatoui/tree/release"
        ></a>
      </div>
    </div>
    <div class="tomatoui-body">
      <div class="aside" v-for="component in componentMap" :key="component.type">
        <span class="component-item" @click="onNavigate(component)">{{ component.name }}</span>
      </div>
      <div class="view">
        <router-view v-slot="{ Component, route }">
          <transition name="tt-fs" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '@/assets/style/light.less';
#tomatoui {
  height: 100%;
  .tomatoui-header {
    display: flex;
    align-items: center;
    color: var(--tt-color-text);
    width: 100%;
    height: 60px;
    padding: 0 30px;
    justify-content: space-between;
    user-select: none;
    z-index: 996;
    background: var(---tt-color-bar);
    border-bottom: 1px solid var(--tt-color-border);
    box-sizing: border-box;
    .tomatoui-header-left {
      display: flex;
      align-items: center;
      .logo {
        width: 32px;
        margin-right: 12px;
        flex-shrink: 0;
      }
      .title {
        font-size: 22px;
      }
    }
    .tomatoui-header-right {
      .github {
        border-radius: 50%;
        width: 42px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: var(--tt-color-text);
        transition: background-color 0.25s;
        margin-right: 6px;
        &::before {
          font-size: 24px;
        }
      }
    }
  }
  .tomatoui-body {
    display: flex;
    height: calc(100% - 60px);
    .aside {
      width: 160px;
      border-right: 1px solid var(--tt-color-border);
      .component-item {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--tt-color-border);
        cursor: pointer;
      }
    }
    .view {
      flex: 1;
      padding: 10px;
    }
  }
}
</style>
