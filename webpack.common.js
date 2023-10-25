const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|mkv|pdf|mp4)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'item.html',
      template: 'src/pages/item.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      template: 'src/pages/cart.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'delivery_options.html',
      template: 'src/pages/delivery_options.html'
    })
  ]
}
