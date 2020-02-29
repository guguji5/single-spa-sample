module.exports = {
  configureWebpack: {
    output: {
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [
    ],
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: 'less-loader', // compiles Less to CSS
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'file-loader',
        },
      ],
    },
  },
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`[name].js`)
    }
    config.externals(['vue', 'vue-router'])
  },
}