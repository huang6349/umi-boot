import { defineConfig } from 'umi';

export default defineConfig({
  title: 'basic-project-template',
  hash: true,
  history: {
    type: 'hash',
  },
  targets: {
    ie: 11,
  },
  antd: {
    compact: true,
  },
  dva: {
    immer: true,
  },
  locale: {
    antd: true,
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'react-use', libraryDirectory: 'lib', camel2DashComponentName: false }],
  ],
});
