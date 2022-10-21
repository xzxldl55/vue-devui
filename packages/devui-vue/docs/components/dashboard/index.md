# Dashboard 仪表盘

仪表盘支持各类挂件

#### 何时使用

作为容器承载各类内容。

### 基本用法

支持拖拽排序，缩放大小，添加，删除，禁止调整单个大小，禁止移动单个，锁定位置等等

:::demo

```vue
<template>
  <d-fullscreen :zIndex="100" @fullscreenLaunch="fullscreenLaunch">
    <d-dashboard ref="dashboardRef" :margin="widgetWidth">
      <d-dashboard-widget :widget-data="1" :width="widgetWidth">
        <template v-slot="slotProps">
          {{ slotProps }}
        </template>
      </d-dashboard-widget>
      <d-dashboard-widget :width="1" :x="3" y="0" :height="4">2</d-dashboard-widget>
    </d-dashboard>
  </d-fullscreen>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const dashboardRef = ref();
    const fullscreenLaunch = () => {};
    const widgetWidth = ref(3);
    onMounted(() => {
      window.ww = widgetWidth;
      window.dd = dashboardRef;
    });
    return {
      fullscreenLaunch,
      widgetWidth,
      dashboardRef
    };
  },
});
</script>

<style></style>
```

:::

### 更多设置

支持配置只读静态，配置上空浮动，连续紧凑排列，从外部拖拽添加，拖拽到垃圾桶删除等

:::demo

```vue
<template>
  <d-fullscreen :zIndex="100" @fullscreenLaunch="fullscreenLaunch">
    <d-dashboard></d-dashboard>
  </d-fullscreen>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const fullscreenLaunch = () => {};
    return {
      fullscreenLaunch,
    };
  },
});
</script>

<style></style>
```

:::

### Dashboard 参数

| 参数 | 类型 | 默认 | 说明 | 跳转 Demo | 全局配置项 |
| ---- | ---- | ---- | ---- | --------- | ---------- |
|      |      |      |      |           |            |
|      |      |      |      |           |            |
|      |      |      |      |           |            |

d-gantt 事件

| 事件 | 类型 | 说明 | 跳转 Demo |
| ---- | ---- | ---- | --------- |
|      |      |      |           |
|      |      |      |           |
|      |      |      |           |
