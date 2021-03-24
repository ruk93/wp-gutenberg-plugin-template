const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {block : "./js/block.js", preview : "./js/Preview.js"},
  output: {
    path: __dirname,
    filename: "build/[name].build.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [{loader : "babel-loader"}],
        exclude: /node_modules/,
      },
      {
        test: /.css$/i,
        use: [{loader: "style-loader"}, {loader : "css-loader"}],
		exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'preview.html',
      inject: false,
    }),
  ]
};
