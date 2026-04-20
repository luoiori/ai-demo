<style>
.card { background: #f5f7fa; border-radius: 12px; padding: 12px 16px; margin: 10px 0; border-left: 4px solid #4a90e2; line-height: 1.5; }
.card-error { background: #fef5f5; border-left-color: #e74c3c; }
.card-success { background: #f0f9ff; border-left-color: #3498db; }
.card-warning { background: #fffbf0; border-left-color: #f39c12; }
.section-header { font-size: 1.8em; margin: 30px 0 20px 0; }
.badge { display: inline-block; background: #e8f4f8; color: #2c3e50; padding: 4px 12px; border-radius: 6px; font-size: 0.9em; margin: 5px 5px 5px 0; }
.highlight { background: #fff3cd; padding: 2px 6px; border-radius: 4px; }
.evolution-chain { text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 20px 0; }
.evolution-items { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 15px; }
.evolution-item { background: rgba(255,255,255,0.2); padding: 10px 16px; border-radius: 8px; font-weight: bold; }
.card h4 { margin: 0 0 8px 0; }
.card p { margin: 6px 0; }
</style>

# 常见名词解释

## 🧠 LLM — AI的大脑

<div class="card card-success">
  <p><strong>LLM = <span class="highlight">概率生成器</span></strong>，不是搜索引擎，不是知识库</p>
  <p>Next Token Prediction — 一个字一个字"接龙"出来的</p>
</div>

常见误区对比：

| | 误区 | 实际 |
|---|---|---|
| 工作方式 | 从数据库里找答案 | 概率预测下一个 Token |
| 为什么会出错 | 数据库没收录 | 追求"合理"而非"正确" |
| 为什么有创造力 | 随机生成 | 本质就是创造性接龙 |

> 不是知识库，是生成器 → 所以它会"说错"，也因此有"创造力"

---

## 🧩 [Token](https://platform.openai.com/tokenizer) — AI的语言单位

<div class="card">
  <p><strong>Token ≠ 字 ≠ 词</strong> — 是 AI 切割文本的最小碎片</p>
  <div style="margin: 10px 0;">
    <span class="badge">English</span><span class="badge">Chat</span><span class="badge">GPT</span>
    <span style="margin: 0 8px;">=</span><strong>2 tokens</strong>
  </div>
  <div>
    <span class="badge">中文</span><span class="badge">人工</span><span class="badge">智</span><span class="badge">能</span>
    <span style="margin: 0 8px;">=</span><strong>3–5 tokens</strong>
  </div>
</div>

为什么要关心 Token：

- **省钱**：中文 Token ≈ 英文 1.5–2x，英文 Prompt 直接省一半
- **理解限制**：对话截断 / AI 变笨 → Token 数量触顶了
- **解释定价**：GPT-4 比 3.5 贵 10x → 每个 Token 的算力指数级增长

---

## 📖 Context — AI的工作记忆

<div class="card card-success">
  <p>🪑 <strong>Context Window = 办公桌桌面大小</strong></p>
  <p>对话、指令、系统提示全铺在上面 → 桌满了，早期内容掉到地上</p>
  <p><strong>Context ≠ 记忆</strong> — 每次对话从零开始，塞什么决定 AI 是专家还是废物</p>
</div>

Context Window 各模型对比：

| 模型 | 窗口大小 |
|------|----------|
| GPT-3.5 | 4K |
| GPT-4 | 128K |
| Claude | 200K |
| Gemini | 1–2M |

---

## 💬 Prompt — 不是提问，是编程

<div class="card card-warning">
  <p><strong>Prompt Engineering</strong> = 把脑子里的模糊想法 → 翻译成 AI 能精确理解的结构化指令</p>
</div>

模糊指令 vs 结构化指令：

| | 模糊指令 | 结构化指令 |
|---|---|---|
| 示例 | "帮我写个登录页面" | 角色 + 技术栈 + 需求细节 + 验证规则 + API + 样式方案 |
| 结果 | AI 只能猜，输出质量随机 | AI 直接执行，输出质量 **10x** |

---

## 🔧 Tool — 从说到做的质变

<div class="card card-success">
  <p>⚡ <strong>有了 Tool</strong>：读文件 · 改代码 · 跑命令 · 调 API · 查数据库 · 开浏览器</p>
  <p>从这一层开始，AI 不再只是辅助 → 开始<strong>真正替代部分人类劳动</strong></p>
</div>

没有 Tool 时，AI 是"嘴强王者"：

- 能写 SQL → 不能执行
- 能说怎么改 → 不能动文件
- 能分析问题 → 不能触发任何操作

---

## 🤖 Agent — 自主决策

<div class="card card-success">
  <p>🤖 <strong>Agent 模式</strong>：你给目标，它决定路径</p>
  <p>你：分析上月销售情况</p>
  <p>Agent → 查数据库 → 数据清洗 + 图表 → 发现区域下滑 → 深查 → 输出分析报告</p>
</div>

AI + Tool ≠ Agent，区别在于谁来驱动：

| | 有 Tool 但没 Agent | Agent 模式 |
|---|---|---|
| 驱动方 | 你每一步都要发指令 | 你只给目标 |
| 示例 | 你：查数据 → AI 查；你：做图表 → AI 做 | AI 自己拆步骤、调工具、反复行动 |
| 角色 | 听话干活的工具人 | 能独立思考的项目经理 |

---

## 🔌 MCP — AI的USB-C接口

<div class="card card-success">
  <p><strong>MCP 不是工具，是基础设施</strong> — 就像 USB-C 改变了硬件生态</p>
  <p>工具提供方实现一次接口，模型统一调用：<span class="badge">Playwright</span><span class="badge">FileSystem</span><span class="badge">DB</span><span class="badge">GitHub</span></p>
</div>

没有 MCP 时的问题：

- 数据库 → 一套对接代码
- 浏览器 → 又一套对接代码
- GitHub → 再一套对接代码
- 每个工具各搞一套 → 重复造轮子，互不兼容

---

## ⭐ Agent Skill — 从通才到专家

<div class="card card-warning">
  <p><strong>Agent 给了决策力，Skill 给了专业深度</strong></p>
  <p>把复杂工作流封装成可复用模块 → 特定任务从 60 分 → 90 分</p>
</div>

一个 Skill 包含：

| 组件 | 作用 |
|------|------|
| 系统提示词 | 定义角色和行为边界 |
| 工作流程 | 固化最优执行路径 |
| 工具组合 | 预配置所需工具 |
| 质量标准 | 定义输出验收标准 |

---

<div class="evolution-chain">
  <h2 style="margin-top:0;">AI 能力进化全链路</h2>
  <div class="evolution-items">
    <div class="evolution-item">LLM<br><small>思考</small></div>
    <div class="evolution-item">Token<br><small>语言</small></div>
    <div class="evolution-item">Context<br><small>记忆</small></div>
    <div class="evolution-item">Prompt<br><small>指令</small></div>
    <div class="evolution-item">Tool<br><small>动手</small></div>
    <div class="evolution-item">Agent<br><small>决策</small></div>
    <div class="evolution-item">MCP<br><small>连接</small></div>
    <div class="evolution-item">Skill<br><small>专精</small></div>
  </div>
</div>

---

## 幻觉

<div class="card card-error">
  模型生成了听起来合理但实际上是错的内容。幻觉不是 bug，是概率预测模型的结构性特征。
</div>

- 根本原因：模型在做概率预测，不区分"我真的知道"和"这么说统计上合理"
- 常见触发场景：冷门细节、具体数字、长文中间段
- 应对方式：关键内容需要验证来源；用 RAG 提供真实材料减少幻觉

> 对于重要的数据，一定要人工校验。

---

## 向量

<div class="card">
  把"意思"变成"一列数字"的方式，让计算机可以做语义相似度比较，而不只是字面匹配。
</div>

```text
"猫"   →  [0.13, -0.82, 0.45, ...]
"狗"   →  [0.11, -0.79, 0.43, ...]
```

- 意思相近的词，向量在数学空间里也靠近彼此
- RAG 检索和嵌入搜索的底层都依赖向量

---

## RAG

<div class="card card-success">
  Retrieval-Augmented Generation，检索增强生成。回答之前先去外部知识库找资料，再把资料注入上下文让模型回答。
</div>

```text
用户提问 → 转成向量 → 搜索知识库 → 拼入提示词 → 模型回答
```

- 解决：模型训练数据有截止日期、不了解内部文档
- 代价：需要维护向量数据库，检索质量直接影响回答质量

---

## 蒸馏

<div class="card">
  用大模型的输出来训练小模型，让小模型学会像大模型那样回答。
</div>

- 大模型（教师）对大量问题生成高质量回答
- 用这些回答作为训练数据，训练小模型（学生）
- 目的：让小模型在特定任务上接近大模型，但成本低很多

---

## 微调

<div class="card card-warning">
  在预训练模型基础上，用特定领域数据继续训练，让模型在某个场景表现更好。微调改变模型本身，RAG 改变模型看到的输入。两者可以组合。
</div>

| 场景 | 推荐方向 |
|------|----------|
| 需要特定说话风格或专业术语 | 微调 |
| 需要引用实时或私有文档 | RAG |
| 希望快速接入知识、不想重新训练 | RAG |
| 希望模型在特定任务上反应更快更准 | 微调 |

---

## Rule

<div class="card">
  明确写下来的行为约束，告诉智能体什么能做、什么不能做。是智能体的"纪律手册"，确保它在授权范围内行动。
</div>

- 明确、可验证，不依赖模型自己判断
- 适合处理边界条件和安全约束

---

## 补充词汇

| 词汇 | 解释 |
|------|------|
| 嵌入（Embedding） | 把文本转换成向量的过程，RAG 和语义搜索的基础 |
| 温度（Temperature） | 控制输出随机性的参数，接近 0 时输出更确定，接近 1 时更多样 |
| 多模态 | 模型能处理多种输入类型，不只是文字，还包括图片、音频等 |
| 推理（Inference） | 模型训练完成后实际运行、生成输出的过程，区别于训练阶段 |
