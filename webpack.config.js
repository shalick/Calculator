import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const mode = "development";
export const entry = resolve(__dirname, "src/index.js");
export const output = {
  path: resolve(__dirname, "dist"),
  filename: "[name][contenthash].js",
  clean: true,
};
export const devtool = "source-map";
export const devServer = {
  static: {
    directory: resolve(__dirname, "dist"),
  },
  port: 3000,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
};
export const module = {
  rules: [
    { test: /\.css$/, use: "css-loader" },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] },
      },
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: "Calculator",
    filename: "index.html",
    template: "./src/index.html",
  }),
  new ESLintPlugin(),
];
