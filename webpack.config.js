import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const module = {
  mode: "production",
  entry: [path.resolve(__dirname, "src/index.js"), path.resolve(__dirname, "src/darkmode.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Calculator",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new ESLintPlugin(),
  ],
};

export default module;
