# 科研管理系统前端

这是一个基于Vue 3 + Vite + Ant Design Vue的科研管理系统前端项目。

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **UI组件库**: Ant Design Vue 4.x
- **状态管理**: Pinia
- **路由**: Vue Router 4
- **图表库**: ECharts
- **图表绘制**: Mermaid.js
- **拖拽功能**: Vue Draggable

## 项目特性

- 🎯 项目管理：项目立项、进度监控、里程碑管理
- 👥 团队协作：任务分配、材料提交、进度更新
- 📊 数据可视化：项目统计、进度图表、工作台
- 🤖 AI助手：智能项目管理助手
- 📱 响应式设计：支持多设备访问
- 🔐 权限管理：基于角色的访问控制

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run serve
```

### 部署到Vercel

1. **连接GitHub仓库**
   - 访问 [Vercel](https://vercel.com)
   - 使用GitHub账号登录
   - 点击"New Project"
   - 选择 `tbe07tyg/shuiwu3` 仓库

2. **配置部署设置**
   - Framework Preset: 选择 `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **环境变量配置**
   - 根据需要在Vercel项目设置中添加环境变量

4. **部署**
   - 点击"Deploy"开始部署
   - 等待构建完成

## 项目结构

```
src/
├── components/          # 公共组件
├── views/              # 页面组件
│   ├── dashboard/      # 仪表板
│   ├── project-manager/ # 项目经理功能
│   ├── team-member/    # 团队成员功能
│   ├── ai-assistant/   # AI助手
│   └── common/         # 通用页面
├── router/             # 路由配置
├── store/              # 状态管理
├── services/           # API服务
├── utils/              # 工具函数
└── config/             # 配置文件
```

## 主要功能模块

### 项目管理
- 项目立项申请
- 项目进度监控
- 里程碑管理
- 项目归档

### 任务管理
- 任务创建与分配
- 进度更新
- 材料提交
- 任务看板

### AI助手
- 智能项目管理建议
- 自动化工作流
- 智能分析报告

### 团队协作
- 成员管理
- 权限控制
- 实时通知
- 文件管理

## 部署配置

项目已包含 `vercel.json` 配置文件，支持：
- 自动构建和部署
- SPA路由重写
- 安全头设置
- 性能优化

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：
- 项目Issues: [GitHub Issues](https://github.com/tbe07tyg/shuiwu3/issues)
- 邮箱: [您的邮箱]

---

**注意**: 这是一个前端项目，需要配合后端API服务使用。请确保后端服务已正确配置并运行。
