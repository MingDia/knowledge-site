---
title: Buttons 插件使用教程
date: 2026-04-09T00:00:00.000Z
tags:
  - Obsidian
  - 插件
  - 教程
description: Obsidian Buttons 插件完整使用指南，包含命令按钮、链接按钮、模板按钮、行内按钮、Templater 集成等高级功能。
public: true
---

# Buttons 插件使用教程

这是 Obsidian 插件 [Buttons](https://github.com/shabegom/buttons) 的完整使用指南。Buttons 插件让你可以在笔记中添加可点击的按钮，用于运行命令、打开链接、执行模板等。

## 快速开始

### 基础按钮示例

```button
name 我的按钮
type command
action Toggle Pin
```
^button-super

点击按钮会执行 *Toggle Pin* 命令。

### Button Maker

使用 **Button Maker** 命令可以一步步引导你创建按钮，这是最快的入门方式。

---

## 按钮类型

### 1. Command 按钮

Command 按钮点击时会运行指定的命令面板命令。`action` 参数是你要运行的命令名称。

```button
name 固定笔记
type command
action Toggle Pin
```
^button-toggle

```button
name 新建 Excalidraw
type command
action Excalidraw: Create a new drawing - IN A NEW PANE
```
^button-drawing

```button
name 切换悬浮
type command
action Hover Editor: Toggle bouncing popovers
```
^button-bounce

### 2. Link 按钮

Link 按钮点击时会打开指定链接。`action` 参数是你要打开的 URL/URI。

#### 打开外部链接

```button
name 访问博客
type link
action https://shbgm.ca/blog/home
```

#### 打开 Obsidian 笔记

```button
name 打开主页
type link
action obsidian://open?vault=myVault&file=主页
```

#### 其他深度链接

```button
name Hook 链接
type link
action hook://file/JWCto1rMV?p=c2FtbW9ycmlzb24vRG93bmxvYWRz&n=Dank%2Epng
```

### 3. Template 按钮

Template 按钮用于执行模板相关操作。

---

## 行内按钮 (Inline Buttons)

行内按钮让你可以将按钮直接放在文本段落、列表和其他内容中。

### 创建行内按钮

**步骤 1:** 创建一个带 ID 的按钮代码块

```button
name 打开日记
type command
action Periodic Notes: Open today's daily note
```
^button-daily

**步骤 2:** 行内引用按钮

在反引号中使用按钮 ID：

```
查看今天的任务: `button-daily`
```

效果：查看今天的任务: `button-daily`

### 行内按钮语法

**按钮 ID 要求：**
- 必须以 `button` 开头
- 例如：`button-daily`、`button-save`、`button-export`

**行内语法：**
```
`button-[你的ID]`
```

### 多个行内按钮

可以在同一行放置多个按钮：

```
快速操作: `button-save` `button-export` `button-archive`
```

### 在不同上下文中使用

#### 列表中
```
- 晨间例程 `button-morning`
- 工作任务 `button-work`  
- 晚间回顾 `button-evening`
```

#### 表格中
```
| 项目 | 状态 | 操作 |
|------|------|------|
| 网站 | 进行中 | `button-update-site` |
| 应用 | 规划中 | `button-plan-app` |
| 文档 | 已完成 | `button-archive-docs` |
```

####  Callout 中
```
:::tip 💡 快速操作
需要更新日记？`button-daily-update`
想开始新项目？`button-new-project`
:::
```

#### 句子中
```
当你准备好开始时，点击 `button-start`，工作流将自动开始。
```

### 行内按钮最佳实践

**集中式按钮库：创建一个专门的笔记存放所有按钮代码块，然后在行内引用它们。

```
# 按钮库

```button
name 快速笔记
type note(Quick Note) text
action # 快速笔记 - <% tp.date.now() %>

## 笔记

templater true
```
^button-quick-note

```button  
name 归档已完成
type command
action Move file to another folder
```
^button-archive

# 使用示例
使用 `button-quick-note` 快速创建笔记。
使用 `button-archive` 清理已完成任务。
```

---

## 按钮突变 (Mutations)

突变是添加到按钮的额外参数，用于修改按钮所在的笔记。

可用的突变：
- **Remove** - 点击后移除按钮
- **Replace** - 替换笔记中的特定行

---

## Templater 集成

Templater 集成允许你在按钮中包含动态的 Templater 命令。

### 基础 Templater 集成

在任何按钮中添加 `templater true` 来启用 Templater 命令处理：

```button
name 添加当前时间
type append text
action 当前时间: <% tp.date.now("HH:mm:ss") %>
templater true
```
^button-current-time

点击时，这个按钮会：
1. 处理 `<% tp.date.now("HH:mm:ss") %>` 获取当前时间
2. 将 "当前时间: 14:30:15" 追加到笔记
3. 转换回 Templater 命令以备下次使用

### 动态笔记创建

#### 基于时间的笔记标题

```button
name 小时日志
type note(<% tp.date.now("HH:MM") %> 日志) text
action ## 日志条目 - <% tp.date.now("YYYY-MM-DD HH:mm") %>

### 笔记

templater true
```
^button-hourly-log

#### 日记创建

```button
name 创建日记
type note(<% tp.date.now("YYYY-MM-DD") %> 日记) template
action 日记模板
templater true
```
^button-daily-note

### 使用 Templater 插入文本

#### 动态文本追加

```button
name 记录会议
type append text
action 
---
**会议记录 - <% tp.date.now("YYYY-MM-DD HH:mm") %>

参会人: 
讨论主题:
行动项:

templater true
```
^button-meeting-log

#### 带时间的行替换

```button
name 更新状态行
type line(1) text
action 状态: 更新于 <% tp.date.now("YYYY-MM-DD") %>
replace [1,1]
templater true
```
^button-update-status

### 高级 Templater 示例

#### 上下文感知按钮

```button
name 引用当前文件
type append text
action 引用自: [<% tp.file.title %>](<% tp.file.title %>) 在 <% tp.date.now("YYYY-MM-DD") %>
templater true
```
^button-reference

#### 条件内容

```button
name 工作日日志
type append text
action ## <% tp.date.now("dddd") %> 日志 - <% tp.date.now("YYYY-MM-DD") %>

<%* if (tp.date.now("dddd") === "Monday") { %>
### 周目标
- [ ] 目标 1
- [ ] 目标 2
<%* } %>

### 今日任务

templater true
```
^button-weekday-log

### Templater 命令示例

#### 日期和时间函数
- `<% tp.date.now() %>` - 当前日期/时间
- `<% tp.date.now("YYYY-MM-DD") %>` - 格式化日期
- `<% tp.date.now("HH:mm") %>` - 当前时间
- `<% tp.date.now("dddd") %>` - 星期几
- `<% tp.date.tomorrow("YYYY-MM-DD") %>` - 明天日期
- `<% tp.date.yesterday("YYYY-MM-DD") %>` - 昨天日期

#### 文件函数
- `<% tp.file.title %>` - 当前文件名
- `<% tp.file.folder() %>` - 当前文件夹路径
- `<% tp.file.path() %>` - 完整文件路径
- `<% tp.file.size %>` - 文件大小

#### 系统函数
- `<% tp.system.prompt("输入名称") %>` - 用户输入提示
- `<% tp.system.clipboard %>` - 剪贴板内容

### Templater 按钮工作原理

1. **点击前**：按钮包含 Templater 命令
	```
	action: 会议 - <% tp.date.now("YYYY-MM-DD") %>
	```

2. **点击时**：命令被处理
	```
	action: 会议 - 2024-07-19
	```

3. **点击后**：命令恢复以备下次使用
	```
	action: 会议 - <% tp.date.now("YYYY-MM-DD") %>
	```

### Templater 要求

使用按钮的 Templater 功能需要：
1. 安装 Templater 插件
2. 在社区插件中启用 Templater
3. 在 Templater 设置中配置模板文件夹
4. 在按钮配置中添加 `templater true`

---

## 高级功能

- **Button Mutations** - 按钮突变
- **Templater inside Buttons** - 按钮中的 Templater
- **Inline Buttons** - 行内按钮
- **Chain Buttons** - 链式按钮

---

## 问题反馈

如果在使用 Buttons 时遇到问题，请前往 [OMG Discord](https://discord.com/invite/obsidianmd) 并在 #plugin-general 频道中 @shabegom。如果你不喜欢 Discord，也可以在 [Obsidian 论坛](https://forum.obsidian.md/) 寻求帮助。

除非是 Buttons 本身的 bug，否则请不要在 GitHub 上提交 issue。

---

## 相关链接

- [Buttons 插件 GitHub](https://github.com/shabegom/buttons)
- [原网站](https://buttonslovesyou.com/)
