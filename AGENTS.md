# AGENTS.md

面向 AI 编码代理的项目约定。这是一个学习工作区，用于从零构建 coding agent 的教程。

## 项目性质

这是一个基于 teach skill 的**学习工作区**，不是软件项目。核心产物是课程与参考文档，供人在浏览器阅读。

## 目录结构

- `MISSION.md` — 学习目标与成功标准（所有教学围绕它）
- `PROGRESS.md` — 进度看板 + 学习地图 + 每课深入指引
- `RESOURCES.md` — 已核实的高信任度资源
- `NOTES.md` — 学习偏好与备忘
- `lessons/NNNN-<slug>.html` — 课程，自包含 HTML，四位数字递增编号
- `reference/*.html` — 速查参考
- `assets/` — 课程共用组件（`course.css`、`quiz.js`）
- `learning-records/NNNN-<slug>.md` — 学习记录

## 内容约定

- 课程与参考都用 `assets/course.css` 统一样式，通过相对路径 `../assets/` 引用。
- 测验用 `assets/quiz.js`：`.quiz[data-answer]` + `.quiz-opt` 按钮，选项字数尽量一致，不通过格式泄露答案。
- 资源必须核实真实存在再收录，不靠记忆编造 URL。
- 课程正文用中文；术语保留英文。

## Git 提交规范

遵循 Conventional Commits，简洁为主：

```
feat(l01): short english description
```

- 类型：`feat` 新增课程/资源，`fix` 修正，`docs` 文档，`chore` 杂项。
- scope 用课程编号（`l01`、`l02`）或模块名（`assets`、`resources`）。
- 描述用英文，一行短句，不加冗长正文。
