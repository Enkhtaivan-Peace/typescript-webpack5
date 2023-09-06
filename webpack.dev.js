const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: './src/app.ts',
  mode: 'development', 
  devtool: 'source-map',
  devServer: {
        static: {
        directory: path.join(__dirname, './'),
        },
        compress: true,
        // port: 9000,
        // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        type: "assets"
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id.css]'
      })
  ]
};