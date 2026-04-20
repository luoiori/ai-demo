<style>
.card { background: #f5f7fa; border-radius: 12px; padding: 12px 16px; margin: 10px 0; border-left: 4px solid #4a90e2; line-height: 1.5; }
.card-error { background: #fef5f5; border-left-color: #e74c3c; }
.card-success { background: #f0f9ff; border-left-color: #3498db; }
.card-warning { background: #fffbf0; border-left-color: #f39c12; }
.card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; }
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

<div class="card-grid">
  <div class="card card-error">
    <h4>❌ 常见误区</h4>
    <p><strong>"LLM = 更聪明的搜索引擎"</strong></p>
    <p>你问它问题，它从数据库里找答案</p>
  </div>
  <div class="card card-success">
    <h4>✓ 本质</h4>
    <p><strong>LLM = <span class="highlight">概率生成器</span></strong></p>
    <p>Next Token Prediction — 一个字一个字"接龙"出来的</p>
  </div>
</div>

<div class="card">
  <p>💬 会「胡说八道」→ 追求「合理」而非「正确」</p>
  <p>✨ 有创造力 → 本质就是创造性接龙</p>
</div>

<div class="card card-warning">
  <strong>记住：</strong>不是知识库，是生成器 → 所以它会"说错"，也因此有"创造力"
</div>

---

## 🧩 [Token](https://platform.openai.com/tokenizer) — AI的语言单位

<div class="card">
  <p><strong>Token ≠ 字 ≠ 词</strong> — 是 AI 切割文本的最小碎片</p>
  <div style="margin: 15px 0;">
    <span class="badge">English</span>
    <span class="badge">Chat</span>
    <span class="badge">GPT</span>
    <span style="margin: 0 10px;">=</span>
    <strong>2 tokens</strong>
  </div>
  <div>
    <span class="badge">中文</span>
    <span class="badge">人工</span>
    <span class="badge">智</span>
    <span class="badge">能</span>
    <span style="margin: 0 10px;">=</span>
    <strong>3-5 tokens</strong>
  </div>
</div>

<div class="card card-warning">
  <h4>01 省钱</h4>
    <p>中文 Token ≈ 英文 1.5~2x → 英文 Prompt 直接省一半</p>
  <h4>02 理解限制</h4>
    <p>对话截断 / AI 变笨 → Token 数量触顶了</p>
  <h4>03 解释定价</h4>
  <p>GPT-4 比 3.5 贵 10x → 每个 Token 的算力指数级增长</p>
</div>

---

## 📖 Context — AI的工作记忆

<div class="card card-success">
  <h4>🪑 办公桌类比</h4>
  <p><strong>Context Window = 桌面大小</strong> → 对话、指令、系统提示全铺在上面 → 桌满了早期内容掉到地上</p>
</div>

<div class="card">
  <h4>Context Window 进化</h4>
  <div style="display: flex; justify-content: space-around; margin-top: 15px;">
    <div style="text-align: center;">
      <div style="background: #e8f4f8; padding: 10px; border-radius: 8px; margin-bottom: 5px;">4K</div>
      <small>GPT-3.5</small>
    </div>
    <div style="text-align: center;">
      <div style="background: #d4e9f7; padding: 10px; border-radius: 8px; margin-bottom: 5px;">128K</div>
      <small>GPT-4</small>
    </div>
    <div style="text-align: center;">
      <div style="background: #b8daf0; padding: 10px; border-radius: 8px; margin-bottom: 5px;">200K</div>
      <small>Claude</small>
    </div>
    <div style="text-align: center;">
      <div style="background: #9ccbe8; padding: 10px; border-radius: 8px; margin-bottom: 5px;">1~2M</div>
      <small>Gemini</small>
    </div>
  </div>
</div>

<div class="card card-error">
  <strong>Context ≠ 记忆</strong> — 每次对话从零开始，塞什么决定AI是专家还是废物
</div>

---

## 💬 Prompt — 不是提问，是编程

<div class="card-grid">
  <div class="card card-error">
    <h4>❌ 模糊指令</h4>
    <p>"帮我写个登录页面"</p>
    <p style="margin-top: 10px;">AI只能猜 → 输出质量随机</p>
  </div>
  <div class="card card-success">
    <h4>✓ 结构化指令</h4>
    <p>角色 + 技术栈 + 需求细节<br>+ 验证规则 + API + 样式方案</p>
    <p style="margin-top: 10px;">AI直接执行 → 输出质量 <strong>10x</strong></p>
  </div>
</div>

<div class="card card-warning">
  <strong>Prompt Engineering</strong> = 把脑子里的模糊想法 → 翻译成AI能精确理解的 结构化指令
</div>

---

## 🔧 Tool — 从说到做的质变

<div class="card-grid">
  <div class="card card-error">
    <h4>没有 Tool</h4>
    <h3>🗣️ 嘴强王者</h3>
    <p>能写SQL → 不能执行<br>能说怎么改 → 不能动文件</p>
  </div>
  <div class="card card-success">
    <h4>有了 Tool</h4>
    <h3>⚡ 实干执行者</h3>
    <p>读文件 · 改代码 · 跑命令<br>调API · 查数据库 · 开浏览器</p>
  </div>
</div>

<div class="card card-warning">
  从这一层开始，AI不再只是辅助 → 开始<strong>真正替代部分人类劳动</strong>
</div>

---

## 🤖 Agent — 自主决策

<div class="card card-error">
  <h4>误区：AI + Tool = Agent? ✗ 不是</h4>
</div>

<div class="card-grid">
  <div class="card">
    <h4>🔧 有Tool但没Agent</h4>
    <p>你：查上月销售数据<br>AI：查完了，给你</p>
    <p>你：做个图表<br>AI：做完了，给你</p>
    <p style="margin-top: 10px;">↑ 每一步都需要你来驱动</p>
  </div>
  <div class="card card-success">
    <h4>🤖 Agent 模式</h4>
    <p>你：分析上月销售情况</p>
    <p>Agent → 查数据库<br>Agent → 数据清洗 + 图表<br>Agent → 发现区域下滑 → 深查<br>Agent → 输出分析报告</p>
    <p style="margin-top: 10px;">↑ 你给目标，它决定路径</p>
  </div>
</div>

<div class="card card-warning">
  从"听话干活的工具人" → <strong>"能独立思考的项目经理"</strong>
</div>

---

## 🔌 MCP — AI的USB-C接口

<div class="card-grid">
  <div class="card card-error">
    <h4>没有 MCP</h4>
    <p>数据库 → 一套对接代码<br>浏览器 → 又一套对接代码<br>GitHub → 再一套对接代码</p>
    <p style="margin-top: 10px;">每个工具各搞一套 → 重复造轮子</p>
  </div>
  <div class="card card-success">
    <h4>有了 MCP</h4>
    <div style="margin: 10px 0;">
      <span class="badge">Playwright</span>
      <span class="badge">FileSystem</span>
      <span class="badge">DB</span>
      <span class="badge">GitHub</span>
    </div>
    <p style="text-align: center; font-size: 1.2em; margin: 10px 0;">⟷ 一个标准协议</p>
    <p>即插即用 · 一次接入 · 全部打通</p>
  </div>
</div>

<div class="card card-warning">
  <strong>MCP 不是工具，是基础设施</strong> — 就像 USB-C 改变了硬件生态
</div>

---

## ⭐ Agent Skill — 从通才到专家

<div class="card-grid">
  <div class="card">
    <h4>🩺 全科医生</h4>
    <p>什么都能看<br>什么都一般</p>
    <div style="margin-top: 15px;">
      <div style="background: #ddd; height: 8px; border-radius: 4px; width: 60%;"></div>
      <p style="margin-top: 5px;"><strong>60分</strong></p>
    </div>
  </div>
  <div class="card card-success">
    <h4>👨‍⚕️ 专科专家</h4>
    <p>封装专属工作流<br>特定任务卓越表现</p>
    <div style="margin-top: 15px;">
      <div style="background: #f39c12; height: 8px; border-radius: 4px; width: 90%;"></div>
      <p style="margin-top: 5px;"><strong>90分</strong></p>
    </div>
  </div>
</div>

<div class="card">
  <h4>一个 Skill 包含：</h4>
  <div style="margin-top: 10px;">
    <span class="badge">系统提示词</span>
    <span class="badge">工作流程</span>
    <span class="badge">工具组合</span>
    <span class="badge">质量标准</span>
  </div>
</div>

<div class="card card-warning">
  <strong>Agent 给了 决策力，Skill 给了 专业深度</strong>
</div>

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

## Token

Token 是模型处理文本的最小单位。模型不直接处理整句话，而是先把文本切成碎片，每一块叫一个 Token。

- 英文一个单词约 1–2 个 Token，中文一个字约 1 个 Token
- Token 不等于字，也不等于词，是介于两者之间的语言碎片([分词](https://chatgpt.com/g/g-mEGwKNecG-zhong-wen-fen-ci-qi/))
- 模型的上下文窗口限制的是 Token 数量，计费也按 Token 计算

## 幻觉

模型生成了听起来合理但实际上是错的内容。

- 根本原因：模型在做概率预测，不区分"我真的知道"和"这么说统计上合理"
- 常见触发场景：冷门细节、具体数字、长文中间段
- 应对方式：关键内容需要验证来源；用 RAG 提供真实材料减少幻觉

> 幻觉不是 bug，是概率预测模型的结构性特征。对于重要的数据，一定要人工校验。

## 向量

把"意思"变成"一列数字"的方式。

```text
"猫"   →  [0.13, -0.82, 0.45, ...]
"狗"   →  [0.11, -0.79, 0.43, ...]
```

- 意思相近的词，向量在数学空间里也靠近彼此
- 让计算机可以做语义相似度比较，而不只是字面匹配
- RAG 检索和嵌入搜索的底层都依赖向量

## RAG

Retrieval-Augmented Generation，检索增强生成。回答之前先去外部知识库找资料，再把资料注入上下文让模型回答。

```text
用户提问 → 转成向量 → 搜索知识库 → 拼入提示词 → 模型回答
```

- 解决：模型训练数据有截止日期、不了解内部文档
- 代价：需要维护向量数据库，检索质量直接影响回答质量

## 蒸馏

用大模型的输出来训练小模型，让小模型学会像大模型那样回答。

- 大模型（教师）对大量问题生成高质量回答
- 用这些回答作为训练数据，训练小模型（学生）
- 目的：让小模型在特定任务上接近大模型，但成本低很多

## 微调

在预训练模型基础上，用特定领域数据继续训练，让模型在某个场景表现更好。

| 场景 | 推荐方向 |
|------|----------|
| 需要特定说话风格或专业术语 | 微调 |
| 需要引用实时或私有文档 | RAG |
| 希望快速接入知识、不想重新训练 | RAG |
| 希望模型在特定任务上反应更快更准 | 微调 |

> 微调改变模型本身，RAG 改变模型看到的输入。两者可以组合。

## MCP

Model Context Protocol，一种让模型标准化连接外部工具和数据源的协议。

- 没有 MCP：每个工具各自写接入方式，互不兼容
- 有了 MCP：工具提供方实现一次接口，模型统一调用
- 类似 USB 接口：统一标准，让不同设备不用再各自适配

## Rule

明确写下来的行为约束，告诉智能体什么能做、什么不能做。

- 明确、可验证，不依赖模型自己判断
- 适合处理边界条件和安全约束
- 是智能体的"纪律手册"，确保它在授权范围内行动

## Skill

预先定义好的行为模块，智能体遇到特定场景时直接调用。

- 包含触发条件、执行步骤和输出格式
- 把复杂流程封装成可复用单元
- Rule 告诉智能体"不能做什么"，Skill 告诉它"怎么做某件事"

## 智能体

能够自主规划、调用工具、执行多步任务的 AI 系统。

普通模型是"问答机"：你问它答，一次结束。  
智能体是"执行者"：你给目标，它自己拆步骤、调工具、反复行动直到完成。

核心组件：

- **规划**：把大目标拆成可执行步骤
- **工具调用**：连接文件、数据库、API 等外部系统
- **记忆**：跨步骤保持上下文连贯
- **反思**：执行中途检查结果、调整策略

## 主流AI排行（个人）


---

## 补充词汇

**Prompt（提示词）**：发送给模型的输入文本，包括问题、背景信息、格式要求等。

**上下文窗口**：模型每次能"看到"的最大 Token 数。超出窗口的内容模型看不到。

**嵌入（Embedding）**：把文本转换成向量的过程，RAG 和语义搜索的基础。

**温度（Temperature）**：控制输出随机性的参数，接近 0 时输出更确定，接近 1 时更多样。

**多模态**：模型能处理多种输入类型，不只是文字，还包括图片、音频等。

**推理（Inference）**：模型训练完成后实际运行、生成输出的过程，区别于训练阶段。
