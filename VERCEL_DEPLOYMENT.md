# Vercel 部署指南

## 概述

本指南将帮助您将科研管理系统前端项目部署到 Vercel 平台。

## 前置条件

1. ✅ 项目已上传到 GitHub: `https://github.com/tbe07tyg/shuiwu3.git`
2. ✅ 项目包含 `vercel.json` 配置文件
3. ✅ 项目使用 Vite 构建工具

## 部署步骤

### 第一步：访问 Vercel

1. 打开浏览器，访问 [Vercel](https://vercel.com)
2. 点击右上角的 "Sign In" 或 "Login"
3. 选择 "Continue with GitHub" 使用 GitHub 账号登录

### 第二步：创建新项目

1. 登录成功后，点击 "New Project"
2. 在 "Import Git Repository" 部分，找到并选择 `tbe07tyg/shuiwu3` 仓库
3. 如果看不到仓库，点击 "Configure GitHub App" 授权 Vercel 访问您的 GitHub 仓库

### 第三步：配置项目设置

在项目配置页面，确保以下设置正确：

#### 基本配置
- **Project Name**: `shuiwu3` (或您喜欢的名称)
- **Framework Preset**: `Vite`
- **Root Directory**: `./` (保持默认)

#### 构建配置
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

#### 环境变量（可选）
如果项目需要环境变量，可以在 "Environment Variables" 部分添加：
- `VITE_API_BASE_URL`: 后端API地址
- `VITE_APP_TITLE`: 应用标题

### 第四步：部署

1. 确认所有配置无误后，点击 "Deploy" 按钮
2. Vercel 将开始构建和部署过程
3. 等待构建完成（通常需要 1-3 分钟）

### 第五步：访问应用

部署成功后，您将看到：
- **Production URL**: 生产环境访问地址
- **Preview URLs**: 预览环境地址（用于测试）

## 自动部署

### 功能说明
- **自动部署**: 每次推送到 `master` 分支时，Vercel 会自动重新部署
- **预览部署**: 创建 Pull Request 时，Vercel 会创建预览环境
- **分支部署**: 每个分支都可以有独立的部署环境

### 配置自动部署
1. 在 Vercel 项目设置中，确保 "Git" 集成已启用
2. 默认情况下，推送到 `master` 分支会触发自动部署
3. 可以在项目设置中自定义自动部署规则

## 自定义域名（可选）

### 添加自定义域名
1. 在项目设置中，点击 "Domains"
2. 输入您的域名（如：`app.yourcompany.com`）
3. 按照提示配置 DNS 记录
4. 等待 DNS 生效（通常需要几分钟到几小时）

### DNS 配置示例
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

## 环境变量管理

### 添加环境变量
1. 在项目设置中，点击 "Environment Variables"
2. 点击 "Add New"
3. 输入变量名和值
4. 选择应用环境（Production、Preview、Development）

### 常用环境变量
```bash
# API 配置
VITE_API_BASE_URL=https://api.yourcompany.com
VITE_API_TIMEOUT=10000

# 应用配置
VITE_APP_TITLE=科研管理系统
VITE_APP_VERSION=1.0.0

# 第三方服务
VITE_AI_SERVICE_KEY=your_ai_service_key
```

## 性能优化

### Vercel 自动优化
- **自动压缩**: 静态资源自动压缩
- **CDN 分发**: 全球 CDN 加速
- **HTTP/2**: 支持 HTTP/2 协议
- **自动缓存**: 智能缓存策略

### 前端优化建议
1. 确保 `vercel.json` 配置正确
2. 使用生产构建文件
3. 优化图片和静态资源
4. 启用代码分割和懒加载

## 监控和分析

### 部署状态
- 在 Vercel 仪表板中查看部署历史
- 监控构建时间和成功率
- 查看错误日志和性能指标

### 性能监控
- 使用 Vercel Analytics 监控用户行为
- 分析页面加载性能
- 监控错误率和用户体验

## 故障排除

### 常见问题

#### 构建失败
1. 检查 `package.json` 中的脚本命令
2. 确认所有依赖都已正确安装
3. 查看构建日志中的错误信息

#### 页面显示空白
1. 检查路由配置是否正确
2. 确认 `vercel.json` 中的重写规则
3. 查看浏览器控制台错误

#### API 请求失败
1. 检查环境变量配置
2. 确认后端服务是否可访问
3. 检查 CORS 配置

### 获取帮助
- **Vercel 文档**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues**: 在项目仓库中创建 Issue
- **Vercel 支持**: 通过 Vercel 仪表板联系支持

## 更新部署

### 手动重新部署
1. 在 Vercel 仪表板中，点击 "Redeploy"
2. 选择要重新部署的版本
3. 等待部署完成

### 回滚部署
1. 在部署历史中找到要回滚的版本
2. 点击 "Promote to Production"
3. 确认回滚操作

## 总结

恭喜！您已成功将科研管理系统部署到 Vercel。现在您可以：

1. 🌐 通过 Vercel 提供的 URL 访问应用
2. 🔄 享受自动部署功能
3. 📱 在全球范围内快速访问您的应用
4. 📊 监控应用性能和用户行为

如有任何问题，请参考本文档或联系技术支持。
