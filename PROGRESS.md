# 学习进度 · Coding Agent 教程

> 这份文档是你的**进度看板 + 学习地图**。每次回来先看这里：
> 你走到哪了、刚学完的这课该怎么深入、下一课是什么。
> 图例：✅ 已完成　🟡 进行中　⬜ 未开始

相关文档：[MISSION.md](./MISSION.md)（为什么学）· [RESOURCES.md](./RESOURCES.md)（可信资源）· [NOTES.md](./NOTES.md)（偏好）· `learning-records/`（学到的东西）

---

## 总览：从零到一个 TS coding agent

四个阶段，由概念到动手，最终产出你自己的 coding agent。

| 阶段 | 主题 | 目标 |
| --- | --- | --- |
| **一、心智地基** | agent 是什么、loop、workflow vs agent | 建立正确心智模型，破除"agent = 复杂框架"的误解 |
| **二、动手基本功** | LLM API、tool calling、异步 | 熟练 tool_use/tool_result 往返，补上 async 短板 |
| **三、从零写 loop** | 手写最小 agent loop → 加工具 → 多步任务 | 用 TS 写出能读写文件、跑命令的最小 coding agent |
| **四、读懂真实项目** | tau → deepseek-harness | 看懂 harness 架构，逼近生产级设计 |
| *（支线）* | *Cordis 插件系统形式化基础* | *主线之后的进阶，见 NOTES.md* |

---

## 进度看板

### 阶段一 · 心智地基

- ✅ **L01 — Agent Loop 的本质**　`lessons/0001-agent-loop-the-essence.html`
  - 核心：agent = LLM 在循环里根据环境反馈调用工具。控制权在你的代码，不在模型。
  - 状态：**已发布，待你学习**（做完 3 道回忆题后回来告诉我结果）
- ⬜ **L02 — Workflow vs Agent：何时才真需要循环**
  - 计划核心：Anthropic 的关键区分——预定义代码路径(workflow) vs 模型自主决定流程(agent)；
    先用最简方案，别过早上循环。认识 5 种可组合模式（chaining/routing/parallelization/
    orchestrator-workers/evaluator-optimizer）。
- ⬜ **L03 — Coding agent 的解剖：大脑 vs 环境 vs 前端**
  - 计划核心：用 tau 的三层划分（harness=可复用大脑 / session=coding 环境 / TUI=前端）
    建立"分层"心智，为后面读源码和自己动手打框架。

### 阶段二 · 动手基本功

- ⬜ **L04 — LLM API 再入门：一次请求里到底发生了什么**
  - 计划核心：messages 结构、system prompt、多轮对话如何靠"把历史全发回去"维持。补足你"用过但不熟"。
- ⬜ **L05 — Tool calling 机制：tool_use / tool_result 往返**
  - 计划核心：工具的 JSON schema 定义、模型返回 tool_use block、你执行后回填 tool_result。
    这是整个 agent loop 的技术心脏。
- ⬜ **L06 — TypeScript 异步补课（按需）**
  - 计划核心：async/await、Promise、流式响应。针对你"异步吃力"的短板，只补 agent 需要的部分。

### 阶段三 · 从零写 loop

- ⬜ **L07 — 最小 agent loop（TS）**：一个 while 循环 + 一次 LLM 调用 + 一个工具
- ⬜ **L08 — 加一组真实工具**：read_file / write_file / run_command
- ⬜ **L09 — 多步任务与停止条件**：让它自己决定转几圈、何时收尾、错误恢复

### 阶段四 · 读懂真实项目

- ⬜ **L10 — 精读 huggingface/tau**：对照你自己写的 loop，看教学级实现怎么组织
- ⬜ **L11 — 走读 deepseek-ai/deepseek-harness**：看生产级 TS harness 的插件化架构

---

## 每课学完后的"深入指引"

学完一课，除了做回忆题，这里给出**该去读哪些资源、如何加深理解**。带 ✅ 的是当前可做的。

### L01 学完后 ✅（现在就能做）
- **读主资源**：[Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
  只读开头到 "What are agents?" 以及 "Agents" 那一节（约 10 分钟）。重点体会那句
  "just LLMs using tools ... in a loop"，和课里的心智图对上。
- **趁热打铁读**：[Thorsten Ball — How to Build an Agent](https://ampcode.com/how-to-build-an-agent)
  他用 <400 行代码印证同一句话："agent = LLM + 循环 + 足够的 token"。看完你会对 L07 要写的东西有画面感。
  （用 Go，但思路语言无关；先读不写。）
- **自测是否真懂**：合上文档，用自己的话跟我复述一遍 agent loop 的 4 个环节 + "谁执行工具"。
  能讲清就说明 storage strength 起来了，我会记一条 learning record。

### L02 学完后
- 读 Anthropic 那篇的**后半段**（5 种 workflow 模式 + Appendix 1 的 coding agent 流程图）。
- 对照思考：你要做的 coding agent 属于"真正的 agent"还是某种 workflow？为什么？

### L05 学完后（tool calling）
- 官方文档二选一精读：[Anthropic Tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
  或 [OpenAI Function calling](https://platform.openai.com/docs/guides/function-calling)。
- 若打算用 DeepSeek：[DeepSeek Tool Calls 指南](https://api-docs.deepseek.com/guides/tool_calls)。
- 动手前的最小练习：让模型调用一个 `get_weather` 假工具，手动跑通一次完整往返。

### L07–L09 学完后（自己的 loop 跑通了）
- 对照 [Anthropic Cookbook 示例](https://platform.claude.com/cookbook/patterns-agents-basic-workflows)，
  看官方实现和你的差异。
- 可选系统课：[Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction)。

### L10–L11 学完后（读完真实项目）
- 深入 [tau 架构文档](https://twotimespi.dev/internals/architecture/) 和
  [dsh 架构文档](https://github.com/deepseek-ai/deepseek-harness)（`docs/architecture.md`）。
- 想理解模型侧的推理能力从哪来：读 [DeepSeek-R1](https://arxiv.org/abs/2501.12948)（原理层，选读）。
- **准备进入支线**：Cordis 插件系统那篇（见 NOTES.md）。

---

## 学习日志（每次上课后追加一行）

| 日期 | 课程 | 结果 / 备注 |
| --- | --- | --- |
| 2026-08-19 | 建立工作区、规划路线、发布 L01 | 资源已核实；L01 待学习 |
