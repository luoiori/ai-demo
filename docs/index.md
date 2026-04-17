# 什么是 LLM

LLM 可以先把它看成一个读过海量文字、很会顺着上下文把话接下去的系统。

## 1. LLM 到底是什么

LLM 是 `Large Language Model` 的缩写，可以拆成三层意思：

- **Large**：规模很大，往往有几十亿到上万亿参数。
- **Language**：它处理的是语言，本质上围绕文本工作。
- **Model**：它不是知识库，而是一个通过训练学会语言规律的模型。


<div class="summary-box">
  <p><strong>一句话：</strong>LLM 是一个在海量文本上训练出来、擅长根据上下文生成语言的模型。</p>
</div>

## 2. 它为什么会说得像那么回事

这里最重要的其实只有两点：
- **本质**：根据上下文预测下一个 token(概率生成器)。
- **关键机制**：Transformer 里的 Attention 会帮助它判断当前应该关注哪些词。

例如输入：

```text
今天天气很好，我想去
```

模型会对后续可能出现的内容做概率判断，例如：

- `公园`
- `散步`
- `打球`

模型会先判断这些候选里谁更可能出现，然后选出一个，再继续往下生成。连续做很多次之后，就形成了一整句回答。

<figure class="whiteboard-figure">
  <img src="/images/whiteboard-token-flow.svg" alt="LLM 从输入到输出的处理流程图" />
  <figcaption>LLM 的核心不是“先想明白再回答”，而是沿着上下文不断做下一步预测。</figcaption>
</figure>

常见误区：更聪明的搜索引擎.

会**胡说八道** -> 追求**合理**而非**正确**

不是搜索, 不是知识库. 是文字生成器 -> 所以它会说错, 因此也有**创造力**

## 3. 它为什么有用

它之所以有用，不是因为它什么都懂，而是因为它特别擅长处理语言任务。

- 问答和聊天
- 总结和改写
- 翻译和润色
- 写邮件、写文案、写代码

它真正强的地方，是能把语言组织成一个看起来完整、自然、像样的答案。

## 4. AI 的缺点和边界

但 LLM 也有很明确的边界：

- **像懂，不等于真懂**：它更像高级模式匹配器，不等于真正理解问题。
- **会自信地犯错**：语气可能很完整，但内容仍然可能是错的。
- **擅长重组，不等于创新**：它很会整理已有知识，但不天然擅长提出真正新的思想。

<div class="warning-box">
  <p><strong>边界提醒：</strong>LLM 很强，但它不是天然可靠的事实机器，也不是一个真正理解世界的智能体。</p>
</div>

最后可以这样记住它：

**LLM 最像一个极其擅长生成语言的系统，而不是一个永远正确、真正理解世界的“大脑”。**

## 5. 其他模型简介

LLM 很火，但 AI 世界并不只有 LLM。按任务类型来看，常见模型大致可以这样分：

| 类别 | 代表模型 | 常见用途 |
| --- | --- | --- |
| 语言类 | Transformer / LLM：GPT、Claude、Qwen、Llama | 聊天、总结、写作、代码、推理 |
| 视觉类 | CNN：ResNet、YOLO；ViT；Diffusion | 分类、检测、图像理解、图像生成 |
| 音频类 | Whisper、VITS | 语音识别、语音合成 |
| 视频类 | 视频 Diffusion：Sora、Runway | 文生视频、视频生成 |
| 表格数据 | XGBoost、LightGBM | 风控、推荐、预测、结构化数据建模 |
| 多模态 | CLIP、多模态 LLM：GPT-4V、Qwen-VL | 图文联合理解、看图问答 |
| 强化学习 | PPO、AlphaGo 系列 | 游戏决策、机器人控制 |

### 5.1 为什么感觉“满世界都是 LLM”

- **通用性强**：一个模型能聊天、写代码、做推理，覆盖面特别大。
- **交互自然**：直接用自然语言下指令，使用门槛很低。
- **生态繁荣**：开源社区和商业公司都在推，声量自然最大。

<div class="summary-box">
  <p><strong>关键点：</strong>LLM 之所以显得无处不在，不是因为它能替代所有模型，而是因为它最像“通用入口”。</p>
</div>

### 5.2 模型选型的核心原则

- 没有“最好”的模型，只有“最合适”的模型。
- 看任务类型，也要看数据量、算力成本、实时性和可解释性。
- 一个越来越常见的方向是：**大模型做大脑，小模型做手脚。**

<div class="warning-box">
  <p><strong>选型提醒：</strong>规划、理解、对话可以交给大模型；执行、感知、实时任务，往往更适合更轻的小模型。</p>
</div>

## 6. 简单原理阅读

[CNN1](https://adeshpande3.github.io/A-Beginner's-Guide-To-Understanding-Convolutional-Neural-Networks/)

[CNN2](https://poloclub.github.io/cnn-explainer/)

[CNN3](https://brohrer.mcknote.com/zh-Hans/how_machine_learning_works/how_convolutional_neural_networks_work.html)


[LLM动画](https://bbycroft.net/llm)

[Transformer原理](https://transformers.run/c1/transformer/)

大语言模型的发展时间线：

<figure class="whiteboard-figure">
  <img src="/images/timeline-of-llm.jpg" alt="近年来发布的部分代表性大语言模型时间线" />
  <figcaption>近年来发布的部分代表性大语言模型，了解即可。</figcaption>
</figure>
