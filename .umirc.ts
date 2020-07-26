import { defineConfig } from 'umi';

import theme from './.theme';

export default defineConfig({
  extraBabelPlugins: [
    ['import', { libraryName: 'react-use', libraryDirectory: 'lib', camel2DashComponentName: false }],
  ],
  favicon: '/assets/favicon.ico',
  theme: theme,
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 11,
  },
  title: 'umi-boot',
  ignoreMomentLocale: true,
  locale: {},
});
