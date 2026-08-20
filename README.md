# Agent Tutorial

一个从零开始、用 TypeScript 构建 coding agent（类似 opencode / Claude Code）的个人学习工作区。

路线由概念到动手，最终目标是亲手写出一个能自主调用工具、多步推理的 coding agent。

## 目录结构

- [`MISSION.md`](./MISSION.md) — 为什么学：学习目标与成功标准
- [`PROGRESS.md`](./PROGRESS.md) — 进度看板 + 学习地图 + 每课的深入指引
- [`RESOURCES.md`](./RESOURCES.md) — 已核实的高信任度学习资源
- [`NOTES.md`](./NOTES.md) — 学习偏好与备忘
- `lessons/` — 课程（自包含的 HTML，可在浏览器打开）
- `reference/` — 速查参考文档
- `assets/` — 课程共用组件（样式表、测验组件）
- `learning-records/` — 学习记录（记录已掌握的关键点）

## 路线概览

1. **心智地基** — agent 是什么、agent loop、workflow vs agent
2. **动手基本功** — LLM API、tool calling、异步
3. **从零写 loop** — 用 TS 写出最小可运行的 coding agent
4. **读懂真实项目** — 精读 tau、走读 deepseek-harness

详见 [`PROGRESS.md`](./PROGRESS.md)。

## 如何使用

在浏览器打开 `lessons/` 下的 HTML 文件即可上课。或起个本地静态服务：

```sh
python3 -m http.server
# 然后访问 http://localhost:8000/lessons/0001-agent-loop-the-essence.html
```
