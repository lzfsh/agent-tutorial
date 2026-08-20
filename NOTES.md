# 教学笔记 / 用户偏好

记录用户表达的偏好、学习意向和需要长期记住的事，供设计课程时参考。

## 学习偏好
- 先理解概念，再动手写代码。
- 每天可投入约 1-2 小时；无 deadline，重深度不重速度。
- 动手实现以 TypeScript 为主；Python 只需看懂。异步编程（async/await、并发）较吃力，需要时补。
- LLM API 用过但不熟，需要专门熟悉 tool calling。

## 学习意向（想学但排在后面的支线）
- **Cordis 论文 / 插件系统形式化基础**（"A Programming Paradigm for Spatiotemporal
  Composability"，dsh 所基于）。用户明确想学。定位为**主线之后的进阶支线**：
  先完成 agent loop → tool calling → harness 主线，再作为独立 mini-mission 进入，
  届时可能需补 effect system / 类型系统前置概念。

## 已确认的可信源码研读对象（用户已 star）
- huggingface/tau —— 教学向极简 coding agent（Python，可读），主线早中期精读对象。
- deepseek-ai/deepseek-harness —— DeepSeek 官方 TS agent harness，插件化架构，中后期研读，
  也是通向上面 Cordis 支线的入口。
