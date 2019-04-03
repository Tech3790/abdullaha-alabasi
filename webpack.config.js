const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const fs = require('fs');

const copyItems = [];
if (fs.existsSync('./src/assets')) {
  copyItems.push({ from: './src/assets', to: 'assets' });
}
if (fs.existsSync('./index.html')) {
  copyItems.push({ from: './index.html', to: 'index.html' });
}

const plugins = [
  new CopyWebpackPlugin(copyItems),
  new HtmlWebpackPlugin({
    meta: {
      viewport: 'width=device-width, initial-scale=1.0'
    },
    template: 'index.html'
  })
];
if (fs.existsSync('./src/assets/icon.png')) {
  plugins.push(new WebappWebpackPlugin('./src/assets/icon.png'));
}

module.exports = {
  entry: './src/Main.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },
  plugins,
  module: {
    rules: [
      { test: /\.sass$/, loader: 'style-loader' },
      {
        test: /\.sass$/,
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
          sass: true,
          url: false
        }
      },
      { test: /\.sass$/, loader: 'sass-loader' },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.(png|jpeg|jpg|pdf|svg)$/, loader: 'file-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};