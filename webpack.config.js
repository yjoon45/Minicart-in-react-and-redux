const webpack = require('webpack');
const { resolve } = require('path');

module.exports = env => ({
  context: resolve(__dirname, 'src'),
  entry: './app.js',
  devtool: env == 'dev' ? 'eval' : 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: env != 'dev' ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/app.bundle.js'
  }
});
