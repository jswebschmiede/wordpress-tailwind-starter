// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = MiniCssExtractPlugin.loader;

const JS_DIR = path.resolve(__dirname, "src/js");
const BUILD_DIR = path.resolve(__dirname, "dist");

const config = {
	entry: {
		main: JS_DIR + "/main.js",
		editor: JS_DIR + "/editor.js",
		admin: JS_DIR + "/admin.js",
		gutenberg: JS_DIR + "/gutenberg.js",
	},
	output: {
		path: BUILD_DIR,
		filename: "js/[name].bundle.js",
	},
	devtool: isProduction ? "nosources-source-map" : "source-map",
	optimization: {
		minimize: true,
		minimizer: ["...", new TerserPlugin(), new CssMinimizerPlugin()],
	},
	watchOptions: {
		ignored: ["/node_modules/", BUILD_DIR],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),

		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: isProduction,
		}),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development,
			// ./dist directory is being served
			host: "localhost",
			port: 3000,
			server: { baseDir: ["dist"] },
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "src/img",
					to: "img",
					toType: "dir",
					noErrorOnMissing: true,
				},
				{
					from: "src/webfonts",
					to: "webfonts",
					toType: "dir",
					noErrorOnMissing: true,
				},
			],
		}),

		new webpack.ProgressPlugin({
			percentBy: "entries",
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				// JavaScript
				test: /\.(js|jsx)$/i,
				include: [JS_DIR],
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				// Sass
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
			},

			// Images: Copy image files to build folder
			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

			// Fonts and SVGs: Inline files
			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},

	externals: {
		jquery: "jQuery",
	},
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
