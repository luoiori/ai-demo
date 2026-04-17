const DEFAULT_MARKDOWN = `# 第一章：我们是 LLM

> 如果这章只记住一句话：**LLM 是一个用海量数据训练出来、专门做"下一个 token 预测"的超大概率模型。**

## 1. 什么是大模型（LLM）

先抓住三件事就够了：

1. **参数很多**
   - 从几十亿到上万亿参数。
   - 参数本质上是模型里的"权重"，可以理解成超大函数中的可调系数。
2. **训练数据很大**
   - 来自网页、书籍、论文、代码、对话等。
   - 覆盖知识、语言模式、推理习惯和任务格式。
3. **通用能力很强**
   - 能聊天、写代码、翻译、总结、问答、生成文案。
   - 不再是"一个模型只干一件事"，而是"一个模型适配很多任务"。

> 演讲时建议先讲"规模"而不是先讲公式。参数规模、数据规模、算力规模，是听众最容易建立直觉的入口。

## 2. 它的本质其实只有一句话

**LLM 的核心目标：预测下一个最可能出现的 token。**

比如输入：

\`\`\`text
今天天气很好，我想去
\`\`\`

模型不会先说"我真正理解了天气和心情"，它更像是在计算：

- \`公园\`
- \`散步\`
- \`打球\`

哪个词在当前上下文里更可能出现。

![LLM 推理流程白板图](./assets/whiteboard-token-flow.svg)

所以可以这样理解：

- 它看起来像"懂你"，是因为预测做得足够准。
- 它的底层不是神秘意识，而是概率建模和序列生成。

## 3. 一段话是怎么被模型处理的

### 3.1 输入先被切成 Token

模型不会直接处理整段原始文本，而是先切分为更小单元：

\`\`\`text
"Hello world" -> ["Hello", " world"]
\`\`\`

中文也一样，会切成词、字或子词。

这一步的意义是：**先把连续语言拆成模型可计算的离散单元。**

### 3.2 Token 会被映射成向量

每个 token 会进一步变成高维向量：

\`\`\`text
"猫" -> [0.13, -0.82, ...]
\`\`\`

这一步可以理解为：**把语言变成数学，把词放进一个可计算的空间里。**

### 3.3 Transformer 负责理解上下文关系

这里的核心机制是 **Self-Attention**。

它做的事情很像：

- 当前词在看谁
- 哪些词和我关系更紧密
- 哪些上下文对现在的判断更重要

比如：

\`\`\`text
小明打了小红，因为他很生气
\`\`\`

模型会判断这里的"他"更可能指向"小明"。

这就是 Attention 的价值：**不是死记硬背词义，而是在上下文里建模词与词之间的关系。**

### 3.4 经过多层网络反复加工

整体流程大致是：

\`\`\`text
Embedding -> 多层 Transformer -> 概率分布
\`\`\`

每一层都在做三件事：

- 融合上下文信息
- 强化语义关系
- 抽象出更高层的表达

### 3.5 最后输出一个概率分布

模型最后不会直接"吐出答案"，而是先得到一个概率表：

- \`公园\`：0.35
- \`家里\`：0.25
- \`公司\`：0.10

然后再决定：

- 直接拿最高概率词，输出会更稳。
- 按概率采样，输出会更灵活、更像人。

## 4. 为什么它会看起来这么聪明

### 4.1 预训练：先学"语言世界长什么样"

预训练阶段的目标很单纯：**预测下一个 token**。

例如输入：

\`\`\`text
我喜欢吃
\`\`\`

正确答案可能是：

\`\`\`text
苹果
\`\`\`

模型会根据预测误差反复调整参数，久而久之就学会：

- 词语如何搭配
- 句子如何展开
- 知识通常以什么形式出现

### 4.2 指令微调：再学"怎样按要求回答"

只有预训练，模型可能只是"会续写"。

通过指令微调，模型开始学会：

- 听懂任务要求
- 按格式回答
- 生成更像助手的输出

比如：

- 用户说"帮我总结这段内容"
- 模型知道应该返回摘要，而不是继续胡乱续写

### 4.3 对齐：把能力往可用和安全方向拉

对齐阶段常见方法是结合人类反馈，让模型更像一个可协作系统：

- 少胡说
- 少跑题
- 更安全
- 更符合人的期待

> 所以它"聪明"并不是因为突然有了意识，而是因为经历了：预训练、指令微调、对齐，这三层能力塑形。

## 5. 为什么偏偏叫"大模型"

关键不是算法突然从零变成一，而是三种规模同时被拉大：

- **数据规模更大**
- **参数规模更大**
- **计算资源更强**，通常依赖 GPU / TPU 集群

![大模型规模与能力白板图](./assets/whiteboard-scale.svg)

当这三件事同时上升时，模型会出现一些过去小模型不明显具备的能力，也就是常说的"涌现能力"：

- 更稳定的推理表现
- 更强的代码生成能力
- 更好的多语言迁移能力
- 更自然的上下文跟随能力

## 6. 用工程视角做一个类比

你可以把大模型想成一个超大函数：

\`\`\`text
f(输入文本) -> 输出文本
\`\`\`

训练过程，本质上就是不断调整这个函数内部的大量参数，让它输出越来越像"人类会写出来的话"。

![大模型像超大函数的白板图](./assets/whiteboard-function.svg)

这个类比很适合工程背景听众，因为它把复杂系统压缩成了一个直观心智模型：

- 输入是文本
- 中间是大量参数和层级计算
- 输出还是文本

## 7. 30 秒压缩总结

- 大模型，本质上是一个**大规模神经网络**，主流结构通常是 Transformer。
- 它最核心的训练目标，是**预测下一个 token**。
- 它之所以强，不是因为某个单点魔法，而是因为**海量数据 + 巨量参数 + 强算力**同时叠加。
- Attention 让它能在上下文里找关系，多层网络让它能不断抽象语义。
- 预训练、指令微调、对齐，一起决定了它为什么"看起来很聪明"。

> 如果要给这一章收尾，可以用一句话结束：**LLM 不是一个会思考的人，它是一个在语言世界里被训练得极其擅长预测的系统。**
`;

const input = document.querySelector("#markdown-input");
const preview = document.querySelector("#markdown-preview");
const sectionList = document.querySelector("#section-list");
const resetButton = document.querySelector("#reset-button");
const statsNode = document.querySelector("#content-stats");
const sourceStatus = document.querySelector("#source-status");

let initialMarkdown = DEFAULT_MARKDOWN;
let activeObserver = null;

if (window.marked) {
  window.marked.setOptions({
    gfm: true,
    breaks: true,
  });
}

function updateStats(markdown) {
  const text = markdown.replace(/\s+/g, "");
  statsNode.textContent = `约 ${text.length} 字符`;
}

function buildSectionList() {
  sectionList.innerHTML = "";

  const headings = [...preview.querySelectorAll("h2, h3")];

  headings.forEach((heading, index) => {
    const id = `section-${index + 1}`;
    heading.id = id;

    const item = document.createElement("li");
    item.className = `level-${heading.tagName.toLowerCase()}`;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = heading.textContent;

    item.appendChild(link);
    sectionList.appendChild(item);
  });

  if (activeObserver) {
    activeObserver.disconnect();
  }

  const links = [...sectionList.querySelectorAll("a")];

  if (!headings.length) {
    return;
  }

  const activateLink = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  activateLink(headings[0].id);

  activeObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (visibleEntry) {
        activateLink(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-18% 0px -62% 0px",
      threshold: 0.1,
    },
  );

  headings.forEach((heading) => activeObserver.observe(heading));
}

function renderMarkdown() {
  const raw = input.value;
  const html = window.marked ? window.marked.parse(raw) : raw;
  preview.innerHTML = html;
  updateStats(raw);
  buildSectionList();
}

async function loadInitialMarkdown() {
  try {
    const response = await fetch("./content/chapter-01.md");

    if (!response.ok) {
      throw new Error(`Unexpected status: ${response.status}`);
    }

    initialMarkdown = await response.text();
    sourceStatus.textContent = "content/chapter-01.md";
  } catch (error) {
    initialMarkdown = DEFAULT_MARKDOWN;
    sourceStatus.textContent = "内置兜底内容";
  }

  input.value = initialMarkdown;
  renderMarkdown();
}

input.addEventListener("input", renderMarkdown);

resetButton.addEventListener("click", () => {
  input.value = initialMarkdown;
  renderMarkdown();
});

loadInitialMarkdown();
