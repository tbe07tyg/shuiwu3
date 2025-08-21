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
