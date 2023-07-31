const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('postcss-import')(),
                  require('autoprefixer')()
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx'] //  '.ts', '.tsx'
  }
}
