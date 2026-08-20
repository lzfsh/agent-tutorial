# 用 LLM 构建 Coding Agent — 资源

> 本清单只收录高信任度来源（官方文档、知名专家、被广泛引用的论文/文章）。
> 知识从这里取，不靠模型的记忆瞎猜。

## Knowledge — 必读入门（按建议阅读顺序）

- [Anthropic: "Building Effective Agents"](https://www.anthropic.com/research/building-effective-agents)
  Anthropic 官方 2024-12 文章（Erik Schluntz & Barry Zhang）。区分 workflow vs agent，给出可组合的 agent 设计模式，
  明确指出"agent 本质就是 LLM 在循环里基于环境反馈调用工具"，并建议先直接用 API、别急着上框架。
  **用于**：动手前必读，理解 agent loop 的本质。最契合"从零手写"目标。

- [ReAct 论文: "Synergizing Reasoning and Acting in Language Models"](https://arxiv.org/abs/2210.03629)
  Shunyu Yao 等，2022（ICLR 2023）。项目主页 https://react-lm.github.io
  **用于**：理解 reasoning + acting 交错这一 agent loop 的理论根基，tool-calling agent 思想的奠基论文。

## Knowledge — 手写 tool calling / agent loop（最贴合目标）

- [Anthropic: Tool use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
  官方文档，讲清 tool_use / tool_result 往返、client vs server tools、strict mode。
  配套教程 [Build a tool-using agent](https://platform.claude.com/docs/en/agents-and-tools/tool-use/build-a-tool-using-agent)
  —— 从单次 tool call 到完整 agentic loop 的手把手教程。
  **用于**：实际动手写 loop 时的第一参考。

- [OpenAI: Function calling 指南](https://platform.openai.com/docs/guides/function-calling)
  官方文档，逐步讲清 5 步 tool-calling flow、schema 定义、streaming、parallel tool calls。
  **用于**：厂商中立视角对照"loop 长什么样"。

- [Anthropic Cookbook: agent patterns 示例代码](https://platform.claude.com/cookbook/patterns-agents-basic-workflows)
  上面 "Building Effective Agents" 各模式的可运行实现。
  **用于**：读完概念后看可运行代码。

## Knowledge — 系统化课程 / 概览

- [Microsoft: AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners)
  18 节课，含 tool use、Agentic RAG、多智能体、规划、memory、MCP/A2A、安全等。每课有 README + 视频 + Python 代码。
  短链 https://aka.ms/ai-agents-beginners
  **用于**：结构化系统入门。注意代码样例绑定微软生态框架，不是纯手写 loop，概念部分价值更大。

- [Google: "Agents" 白皮书 (Kaggle)](https://www.kaggle.com/whitepaper-agents)
  Google 出品的 agent 概览 PDF。讲 agent 三大组件（model / tools / orchestration）、ReAct/CoT/ToT。
  （作者归属以 PDF 首页署名为准，常被引为 Julia Wiesinger 等。）
  **用于**：想要一份厂商视角、概念清晰的概览时。

- [Google Agent Development Kit (ADK) 文档](https://google.github.io/adk-docs/)
  源码 https://github.com/google/adk-python 。生产级 agent 框架，含 tools、多 agent、runtime、评估、部署。
  **用于**：想看一个生产级框架如何组织 agent 时的对照。属"用框架"而非"从零"，参考为主。

## Knowledge — 真实 coding agent 源码（研读对象，用户已 star）

- [huggingface/tau](https://github.com/huggingface/tau)
  HuggingFace 官方出品的极简 coding agent（Python 3.12+）。定位是 **teaching project** ——
  "a working example of how coding agents are built"，刻意保持小而可读，不从庞大生产代码起步。
  架构分三层：`tau_ai`（provider 适配）→ `tau_agent`（可复用的"大脑"：messages / tools / events / loop / harness / session）
  → `tau_coding`（包成真实 coding app：CLI/TUI、文件/shell 工具）。文档 https://twotimespi.dev/internals/architecture/
  **用于**：这是本 mission 最贴合的源码研读对象 —— 用可读的 Python 看清 agent loop 与 harness 的真实结构。
  它是 "Pi"（闭源 coding agent，见 https://twotimespi.dev）的 Python 移植。Python 只需"看懂"，正好匹配你的背景。

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`)
  DeepSeek AI 官方开源 agent harness，**TypeScript** 写成，"everything is a plugin" 架构，基于 Cordis。
  目前是 developer preview，迭代快、会有破坏性变更。架构文档 `docs/architecture.md`、`docs/development.md`。
  **用于**：mission 的 TS 目标最直接的大型参考。适合中后期看"一个真实 TS agent harness 如何做插件化架构"。
  注意：体量大、抽象层多，不适合最早期入门（先用 tau 看清最小结构，再来看它如何工程化）。

## Knowledge — DeepSeek 相关（模型原理 + API）

> 说明：DeepSeek **没有**一篇专讲 agent/harness 的独立论文。dsh 的能力建立在下面两篇模型论文之上；
> agent 层面的东西看 dsh 源码，reasoning/训练原理看这两篇。别引用不存在的"DeepSeek Agent 论文"。

- [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL](https://arxiv.org/abs/2501.12948)
  DeepSeek-AI。讲如何用纯强化学习（无需人工标注推理轨迹）激发 LLM 推理能力，涌现自我反思、验证、动态策略调整。
  已发表于 Nature (2025, vol 645, pp 633-638)。
  **用于**：理解 agent"多步推理"背后的 reasoning / RL 训练原理。属原理层，非动手层。

- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437)
  DeepSeek-AI。671B MoE 模型技术报告（MLA、DeepSeekMoE、auxiliary-loss-free 负载均衡、multi-token prediction）。
  **用于**：想了解 dsh 底座模型的架构与训练细节时。偏底层，选读。

- [DeepSeek API — Tool Calls 指南](https://api-docs.deepseek.com/guides/tool_calls)
  官方 function calling 文档，含 Python 示例、thinking 模式下的 tool use（V3.2 起）、strict 模式（Beta）。
  API 首页 https://api-docs.deepseek.com （OpenAI/Anthropic 兼容格式）。
  **用于**：用 DeepSeek 模型接自己的 agent 做工具调用时。

- [Cordis paper: "A Programming Paradigm for Spatiotemporal Composability"](https://github.com/cordiverse/paper) ★用户想学
  dsh 所基于的 Cordis 框架的形式化基础（revertible effects、reactive coeffects、热模块替换）。
  注意：这是活跃修订中的 preprint（Draft 2026-08-13），会大改，不是稳定可引用的定稿。
  **用于**：想深入理解 dsh "everything is a plugin" 架构原理时。**不是** agent 入门教程。
  **学习意向**：用户明确想学这篇（插件系统形式化基础）。定位为主线之后的**进阶支线** ——
  先完成 agent loop / tool calling / harness 主线，具备读懂插件化架构的基础后再进入。
  届时作为一个独立的 mini-mission 处理（可能需要补一点 effect system / 类型系统的前置概念）。

## Knowledge — 从零手写 agent（教程 / 更多课程）

- [Thorsten Ball: "How to Build an Agent"](https://ampcode.com/how-to-build-an-agent)
  Amp / Sourcegraph，2025-04。用不到 400 行代码从零手写一个会读文件/列目录/改文件的 code-editing agent。
  核心论点："agent = LLM + 循环 + 足够的 token"。用的是 Go，但思路语言无关。
  **用于**：亲手理解 coding agent 内循环本质的最佳起点，和你的 mission 高度对齐。读完可用 TS 复现。

- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction)
  HuggingFace 官方免费课程，从概念到 smolagents/LangGraph/LlamaIndex 三框架实操，含认证。
  **用于**：想要一条系统、带练习和认证的学习路径时。

- [Hugging Face smolagents 文档](https://huggingface.co/docs/smolagents/index)
  HuggingFace 极简 agent 库（核心约千行代码），主打 CodeAgent（用代码而非 JSON 表达动作）。
  **用于**：想读一个"小到能全部读完"的 agent 实现、或快速搭原型时。是 tau 之外另一个可精读的小代码库。

- [OpenAI: A Practical Guide to Building Agents (PDF)](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
  OpenAI 官方 PDF 指南。讲何时该构建 agent、编排模式与护栏设计。
  **用于**：想要一份厂商视角的"何时/如何"决策指南时。

## Knowledge — 生产级框架 / SDK（对照参考，非"从零"）

- [Anthropic Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview)
  把 Claude Code 的 agent loop、工具、上下文管理封装成 Python/TS 库。
  **用于**：想用生产级现成 harness 而不自己写 loop 时的对照。（旧 URL `.../claude-code/sdk` 已失效。）

- [OpenAI Agents SDK (Python)](https://openai.github.io/openai-agents-python/)
  OpenAI 官方 Python agents SDK，覆盖 agents、tools、guardrails、handoffs、sessions、tracing、MCP。
  **用于**：用 OpenAI 生态搭 agent 时的对照参考。

- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
  LangChain 的低层 agent 编排框架，强于持久化、human-in-the-loop、状态管理。
  **用于**：需要把确定性步骤与 LLM 步骤混在一张图里、构建长时有状态 agent 时的对照。（旧 URL 会重定向到此。）

## 待核实 / 需要你补充链接

- **opencode / Claude Code 源码**：mission 的核心目标之一是读懂它们。待确认官方仓库地址后收录，作为后期"源码研读"阶段的主资源。

## Wisdom (Communities)
- 待补充。用户尚未表达社区偏好；后续根据进展推荐高信誉社区（如相关 Discord、论坛）。

## Gaps（缺口，驱动后续搜索）
- 一份专门"用 TypeScript 从零写 coding agent"的权威端到端教程尚未找到 —— 现有最佳组合是
  Anthropic tool-use 教程（概念+API）+ 自己用 TS 复现。若后续发现优质 TS 专项资源，补入 Knowledge。
- opencode / Claude Code 的架构讲解类材料（官方 blog / 设计文档）待搜集。
