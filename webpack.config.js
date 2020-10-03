const webpack = require('webpack')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 1
  entry: './index.js',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|build)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    react: 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin()
  ],

  devServer: {
    contentBase: './build',
    hot: true
  }
}
