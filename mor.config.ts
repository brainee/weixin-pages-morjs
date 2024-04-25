import { defineConfig } from '@morjs/cli'
import path from 'path';

export default defineConfig([
  {
    name: 'wechat-miniprogram',
    sourceType: 'wechat',
    target: 'wechat',
    alias:{
      // 'tdesign-miniprogram': 'tdesign-miniprogram',
    'config': path.resolve(__dirname, 'src/config/'),
    'services': path.resolve(__dirname, 'src/services/'),
    'model': path.resolve(__dirname, 'src/model/'),
    'utils': path.resolve(__dirname, 'src/utils/'),
    'components': path.resolve(__dirname, 'src/components/*/'),
    },
    compileType: 'miniprogram',
    compileMode: 'bundle'
  },
  {
    name: 'alipay-miniprogram',
    sourceType: 'wechat',
    target: 'alipay',
    alias:{
      // 'tdesign-miniprogram': 'tdesign-miniprogram',
    'config': path.resolve(__dirname, 'src/config/'),
    'services': path.resolve(__dirname, 'src/services/'),
    'model': path.resolve(__dirname, 'src/model/'),
    'utils': path.resolve(__dirname, 'src/utils/'),
    'components': path.resolve(__dirname, 'src/components/*/'),
    },
    compileType: 'miniprogram',
    compileMode: 'bundle',
    processNodeModules: {
      include: [/tdesign\-miniprogram/]
    }
  },
  {
    name: 'web',
    sourceType: 'wechat',
    target: 'web',
    alias:{
      // 'tdesign-miniprogram': 'tdesign-miniprogram',
    'config': path.resolve(__dirname, 'src/config/'),
    'services': path.resolve(__dirname, 'src/services/'),
    'model': path.resolve(__dirname, 'src/model/'),
    'utils': path.resolve(__dirname, 'src/utils/'),
    'components': path.resolve(__dirname, 'src/components/*/'),
    },
    compileType: 'miniprogram',
    compileMode: 'bundle',
    processNodeModules: {
      include: [/tdesign\-miniprogram/]
    }
  }
])
