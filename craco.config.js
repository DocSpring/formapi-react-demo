module.exports = function({ env, paths }) {
  return {
    babel: {
      plugins: [
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
        ],
      ],
    },
    webpack: {
      alias: { react: 'preact-compat', 'react-dom': 'preact-compat' },
      // configure: (webpackConfig, { env, paths }) => {
      //   debugger
      //   console.log(webpackConfig)
      //   return webpackConfig
      // },
    },
  }
}
