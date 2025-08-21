#!/bin/bash
set -e

echo "开始构建项目..."

# 确保有执行权限
chmod +x node_modules/.bin/* 2>/dev/null || true

# 设置环境变量
export NODE_ENV=production

# 运行构建命令
echo "运行 npm run build..."
npm run build

echo "构建完成！"
