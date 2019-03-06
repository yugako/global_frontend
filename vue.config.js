var webpack = require('webpack');

module.exports = {
  devServer: {
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost',
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(process.env.API_URL) || JSON.stringify(process.env.VUE_APP_API_URL)
        }
      })
    ]
  }
}
