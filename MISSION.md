# Mission: 用 LLM 从零构建 Coding Agent

## Why
我想亲手用 TypeScript 从零写出一个能自主调用工具、多步推理的 coding agent（类似 opencode / Claude Code），
不依赖高层框架。要做到这一点，我需要先真正理解 agent 背后的原理（agent loop、tool calling、
planning、memory、多 agent 协作），并能看懂 opencode / Claude Code 这类项目的源码与设计。

## Success looks like
- 能讲清楚一个 agent loop 的每一步在做什么，并从零手写出最小可运行版本
- 熟练使用 LLM API 的 tool calling（tool_use / tool_result 往返），不再只是调 API 写简单 demo
- 能读懂 opencode / Claude Code 等真实 coding agent 的核心源码与架构决策
- 最终产出：一个我自己实现的、能调用工具（读写文件、执行命令等）的 TS coding agent
- 能跟上 agent 领域的前沿论文与设计模式，看懂并复述其核心思想

## Constraints
- 每天可投入约 1-2 小时；无 deadline，重深度不重速度
- 学习偏好：先理解概念，再动手写代码
- 语言背景：TypeScript 熟练；Python 能简单看懂；异步编程（async/await、并发）可能吃力，需要补
- LLM API：用过但不熟，调用过 API 写过简单 demo，没搭过 agent —— 需要专门熟悉
- 所有教学尽量落到 TypeScript 上；概念讲解可跨语言，但动手实现以 TS 为主

## Out of scope（暂不追）
- 强化学习意义上的 agent（RL / reward / environment）—— 与本 mission 的 LLM agent 不同方向
- 生产级框架的深度使用（LangChain / Google ADK / Microsoft Agent Framework）——
  可作为参考对照，但目标是"从零手写"而非"学会用框架"
- 大规模分布式多 agent 编排的运维细节 —— 先理解协作原理即可
