const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./main.jsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name][contenthash].bundle.js",
    clean: true,
    // for in-memory dev server - refers to virtual location (url) where static assets are served from when the browser asks for them
    publicPath: "",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "../index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  devServer: {
    port: 6674,
    static: [
      { directory: "./dist", publicPath: "" },
      { directory: "./public", publicPath: "" },
    ],
    hot: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        // js transpilation (converts ts to js as well)
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // css pre-processing & bundling
        test: /\.(css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        // image assets
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  // TODO: add support for code splitting
  // optimization: {
  //   runtimeChunk: "single",
  // },
};
