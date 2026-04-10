---
title: Dataview Task 使用说明
date: 2026-04-08T00:00:00.000Z
tags:
  - Obsidian
  - 插件/Dataview
  - 插件/Tasks
  - 任务管理
description: Obsidian中Tasks插件使用Dataview格式标记任务属性的完整指南，包含优先级、日期、重复任务等语法说明。
public: true
---

# Dataview Task 使用说明

本文档介绍Obsidian中Tasks插件使用Dataview格式标记任务属性的规范和方法。

---

## Dataview格式任务语法

### 优先级标记（内联字段格式）
- `[priority:: highest]` 最高优先级
- `[priority:: medium]` 高优先级
- （无标记）默认优先级
- `[priority:: low]` 低优先级
- `[priority:: lowest]` 最低优先级

### 日期标记
- `[due:: YYYY-MM-DD]` 截止日期 (Due Date)
- `[start:: YYYY-MM-DD]` 开始日期 (Start Date)
- `[scheduled:: YYYY-MM-DD]` 计划日期 (Scheduled Date)
- `[completion:: YYYY-MM-DD]` 完成日期
- `[created:: YYYY-MM-DD]` 创建日期

### 重复任务
- `[repeat:: every day]` 每天重复
- `[repeat:: every week]` 每周重复
- `[repeat:: every month]` 每月重复

### 新建任务示例
```
- [ ] 完成项目评审  [priority:: highest]  [due:: 2026-04-10]  #工作/项目A
```

:::tip 💡 格式优化提示
Dataview字段之间建议使用两个空格分隔，可避免Live Preview模式下字段被意外隐藏的问题。

:::
---

## Dataview 查询说明
- 内置的任务统计会自动更新所有任务状态
- 支持按标签、优先级、截止时间等多维度筛选查询
- 可自定义查询条件，实现不同场景的任务统计需求

### 常用查询示例
#### 查询所有未完成任务
```dataview
TASK
FROM "YourFolder"
WHERE !completed
SORT due ASC
```

#### 按优先级统计任务
```dataview
TABLE WITHOUT ID
  priority as "优先级",
  length(filter(rows, (r) => !r.completed)) as "未完成",
  length(filter(rows, (r) => r.completed)) as "已完成",
  length(rows) as "总计"
FROM "YourFolder"
GROUP BY priority
```

---

## 格式说明
:::note 📝 格式兼容性
使用`[属性:: 值]`内联字段格式标记的任务属性，同时支持Tasks插件和Dataview插件识别。

如需切换回Emoji表情格式，请在Tasks插件设置中调整对应格式选项。

:::tip 💡 使用提示
你可以在任何笔记中按照上述格式添加新任务，点击复选框会自动标记完成状态，保存后相关的Dataview统计会自动更新。

:::
