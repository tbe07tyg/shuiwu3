# Vercel 部署故障排除指南

## 常见构建错误及解决方案

### 1. 权限错误 (Permission Denied)

**错误信息：**
```
sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```

**解决方案：**
- ✅ 已修复：使用 `vercel-build.js` 脚本
- 确保 `vercel.json` 中 `buildCommand` 设置为 `node vercel-build.js`
- 检查 `vercel-build.js` 文件是否存在且内容正确

### 2. 依赖安装失败

**错误信息：**
```
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /vercel/path0/package.json
npm ERR! errno -2
```

**解决方案：**
- 确认项目根目录包含 `package.json`
- 检查 `vercel.json` 中的 `installCommand` 设置
- 确保所有依赖都在 `package.json` 中正确声明

### 3. 构建超时

**错误信息：**
```
Build exceeded maximum execution time
```

**解决方案：**
- 优化构建过程，减少不必要的依赖
- 使用 `.vercelignore` 排除不需要的文件
- 检查是否有过大的文件或依赖

### 4. 内存不足

**错误信息：**
```
JavaScript heap out of memory
```

**解决方案：**
- 增加 Node.js 内存限制
- 优化构建配置
- 检查是否有内存泄漏

## 当前项目配置

### vercel.json 配置
```json
{
  "buildCommand": "node vercel-build.js",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "functions": {
    "api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### vercel-build.js 脚本
```javascript
const { execSync } = require('child_process');
const path = require('path');

console.log('开始构建项目...');

try {
  // 设置环境变量
  process.env.NODE_ENV = 'production';
  
  // 运行构建命令
  console.log('运行 npm run build...');
  execSync('npm run build', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('构建完成！');
} catch (error) {
  console.error('构建失败:', error.message);
  process.exit(1);
}
```

## 部署检查清单

### 部署前检查
- [ ] `package.json` 存在且包含正确的脚本
- [ ] `vercel.json` 配置正确
- [ ] `vercel-build.js` 脚本存在
- [ ] 所有依赖都已提交到Git
- [ ] `.gitignore` 配置正确

### 部署后检查
- [ ] 构建日志显示成功
- [ ] 应用可以正常访问
- [ ] 路由重写正常工作
- [ ] 静态资源正确加载

## 环境变量配置

### 必需环境变量
```bash
# 如果项目需要后端API
VITE_API_BASE_URL=https://your-api-domain.com

# 应用配置
VITE_APP_TITLE=科研管理系统
```

### 环境变量设置步骤
1. 在Vercel项目设置中找到 "Environment Variables"
2. 点击 "Add New"
3. 输入变量名和值
4. 选择应用环境（Production/Preview/Development）
5. 点击 "Save"

## 性能优化建议

### 构建优化
- 使用 `npm ci` 而不是 `npm install` 进行生产构建
- 启用依赖缓存
- 排除不必要的文件

### 运行时优化
- 启用代码分割
- 使用懒加载
- 优化图片和静态资源

## 监控和调试

### 构建日志
- 在Vercel仪表板中查看详细构建日志
- 关注错误信息和警告
- 检查构建时间和资源使用

### 运行时监控
- 使用Vercel Analytics监控性能
- 检查错误率和用户行为
- 监控API响应时间

## 联系支持

如果问题仍然存在：

1. **Vercel 支持**
   - 通过Vercel仪表板联系支持
   - 提供详细的错误日志和配置信息

2. **GitHub Issues**
   - 在项目仓库中创建Issue
   - 包含错误信息和复现步骤

3. **社区支持**
   - Vercel Discord 社区
   - Stack Overflow
   - GitHub Discussions

## 总结

通过使用 `vercel-build.js` 脚本，我们已经解决了权限问题。现在您可以：

1. 🔄 重新触发Vercel部署
2. 📊 监控构建过程
3. 🌐 享受成功的部署结果

如果遇到其他问题，请参考本指南或联系技术支持。
