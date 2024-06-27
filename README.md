# Next.js 项目模板 - T3 Stack 基础版

欢迎使用基于 [T3 Stack](https://create.t3.gg/) 的 Next.js 项目模板，该项目模板通过 `create-t3-app` 初始化，并集成了多种常用基础功能，为您的 Web 应用开发提供快速启动的能力。

## 项目特点

- **Next.js**: 一个轻量且强大的 React 框架，用于构建用户界面和服务器端渲染的 Web 应用。
- **UnoCSS**: 一个实用性优先的 CSS 框架，帮助您快速构建工具类样式。
- **tRPC**: 一个用于构建类型安全 API 的框架，简化了数据流和服务器端逻辑的处理。
- **TypeScript**: 提供了静态类型检查，增强了代码的可读性和可维护性。
- **Prisma**: 一个流行的 ORM 库，提供了数据库迁移和类型安全的数据访问。

## 快速开始

### 安装

1. 克隆项目仓库到本地机器
2. 进入项目目录
3. 运行 `pnpm install` 安装依赖

### 本地开发

- 启动开发服务器：`npm run dev`
- Prisma 工作台：`npm run db:studio`

### 构建与部署

- 构建项目：`npm run build`
- 启动生产服务器：`npm run start`

## 核心依赖

- **@emotion/css**: 用于组件化的 CSS 样式。
- **@formkit/auto-animate**: 表单自动动画效果。
- **@iconify-json/tabler**: 图标集合。
- **@mantine/core**: Mantine UI 组件库。
- **@prisma/client**: Prisma ORM 数据库客户端。
- **@tanstack/react-query**: React Query 状态管理库。
- **@trpc/client**, **@trpc/next**, **@trpc/react-query**, **@trpc/server**: tRPC 相关库。
- **@unocss/cli**: UnoCSS 开发工具。
- **clsx**: 一个用于条件渲染 CSS 类的实用程序。
- **dayjs**: 轻量级日期库。
- **framer-motion**: 用于动画的 React 库。
- **next**: Next.js 框架。
- **react**, **react-dom**: React 及其 DOM 库。
- **zod**: 用于运行时数据验证的库。
- **zustand**: 用于 React 应用的状态管理库。

## 了解更多

- [T3 Stack 文档](https://create.t3.gg/)
- [T3 Stack 学习资源](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
- [create-t3-app GitHub 仓库](https://github.com/t3-oss/create-t3-app)

## 部署

- 部署到 [Vercel](https://create.t3.gg/en/deployment/vercel)
- 部署到 [Netlify](https://create.t3.gg/en/deployment/netlify)
- 部署到 [Docker](https://create.t3.gg/en/deployment/docker)

## 贡献

我们欢迎您的贡献！提交拉取请求时，请确保遵循项目的编码标准和指南。

## 许可

本项目采用 [MIT 许可证](LICENSE)。
