const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 修改 webpack 配置以支持无扩展名导入
      webpackConfig.resolve.extensions = [
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
      ];
      
      // 添加路径别名
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      };
      
      return webpackConfig;
    },
  },
};
