---
nav: Components
title: Button 按钮 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: -1 # 分组排序，值越小越靠前
---

## 基础用法

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/base.tsx"></code>

## 不同大小

<code src="./demo/size.tsx"></code>

## 自定义

<code src="./demo/custom.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | string | default | primary / default / ghost / link |
| size | 按钮大小 | string | md | sm / md / lg |
| className | 自定义类名 | string | - | - |
| asChild | 是否渲染为子元素 | boolean | false | - |
| onClick | 点击事件 | (e: React.MouseEvent) => void | - | - |
