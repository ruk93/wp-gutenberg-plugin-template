module.exports = {
  entry: "./js/block.js",
  output: {
    path: __dirname,
    filename: "build/block.build.js",
  },
  module: {
    // loaders: [
    // 	{
    // 		test: /.js$/,
    // 		loader: 'babel-loader',
    // 		exclude: /node_modules/,
    // 	},
    // ],
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
};
