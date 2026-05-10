	# Ponder Tutorial

A tutorial for Ponder in Minecraft Forge 1.20.1.

---

# 环境要求

在启动项目前，请确保已经安装以下环境：

- Node.js 18 或更高版本
- npm(通常会随 Node.js 一起安装)

推荐使用：

- Node.js 20 LTS

检查版本：

```bash
node -v
npm -v
```

---

# 安装项目依赖

首次克隆项目后，需要先安装依赖。

在项目根目录打开终端(CMD / PowerShell)：

```bash
npm install
```

等待依赖安装完成。

---

# 启动开发服务器

在项目根目录执行：

```bash
npm run docs:dev
```

启动成功后，终端会显示本地地址：

```text
http://localhost:8080/
```

使用浏览器打开即可预览和编辑文档。

---

# 构建静态网站

执行：

```bash
npm run docs:build
```

构建完成后，生成的网站文件位于：

```text
docs/.vuepress/dist
```

可直接部署到静态网站服务。

---

# 清理缓存启动

如果出现缓存问题，可以执行：

```bash
npm run docs:clean-dev
```

---

# 项目结构

```text
docs/
├── .vuepress/     # VuePress 配置
├── guide/         # 文档内容
├── public/        # 静态资源
└── README.md
```

---

# 使用技术

- VuePress 2
- Vite
- Plume Theme
- Vue 3

---

# License

AGPLv3