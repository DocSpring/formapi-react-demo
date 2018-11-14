const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
      new WebpackBar({ profile: true }),
    ],
  },
  plugins: [
    { plugin: require('craco-preact') },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          'src/style/AntDesign/customTheme.less'
        ),
      },
    },
  ],
};
