---
nav: Components
title: Input 输入框 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: -1 # 分组排序，值越小越靠前
---

## 基础用法

<code src="./demo/base.tsx"></code>

## API

| 参数         | 说明               | 类型                             | 默认值 | 可选值 |
| ------------ | ------------------ | -------------------------------- | ------ | ------ |
| className    | 自定义类名         | string                           | -      | -      |
| value        | 输入框的值         | string                           | -      | -      |
| placeholder  | 输入框的占位符     | string                           | -      | -      |
| disabled     | 是否禁用           | boolean                          | false  | -      |
| onChange     | 输入框值改变事件   | (e: React.ChangeEvent) => void   | -      | -      |
| onFocus      | 输入框获得焦点事件 | (e: React.FocusEvent) => void    | -      | -      |
| onBlur       | 输入框失去焦点事件 | (e: React.FocusEvent) => void    | -      | -      |
| onPressEnter | 按下回车键事件     | (e: React.KeyboardEvent) => void | -      | -      |
