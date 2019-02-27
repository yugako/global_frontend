var webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_API_URL,
    port: process.env.PORT || 4563,
    host: process.env.HOST || '127.0.0.1',
  }
}
