const path = require("path");
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = {
	devtool: "cheap-module-eval-source-map",
	resolve: {
		extensions: [".webpack.js", ".jsx", ".js"]
	},
	context: path.join(__dirname),
	entry: {
		"main": path.join(__dirname, "frontend", "main.jsx")
	},
	output: {
		path: path.resolve(__dirname, "bundles"),
		filename: "[name].js"
	},
	stats: {
		// Add information about the reasons why modules are included
		reasons: true,
		// Add errors
		errors: true,
		// Add details to errors (like resolving log)
		errorDetails: true
	},
	module: {
		rules: [{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.less$/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							url: true
						}
					},
					{
						loader: "less-loader",
						options: {
							noIeCompat: true
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: {
					loader: "svg-url-loader"
				}
			},
			{
				test: /\.(png|jpe?g|woff|woff2|eot|ttf)$/,
				use: {
					loader: "url-loader"
				}
			}
		]
	},
	plugins: [
		new WebpackBuildNotifierPlugin({
			title: "PojectName Webpack Build",
			logo: path.resolve("./favicon.ico"),
			suppressSuccess: true
		}),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: 'template.html'
		})
	],
	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 9005,
		clientLogLevel: "info",
		open: true,
		inline: true,
		publicPath: "http://localhost:9005/",
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		watchOptions: {
			aggregateTimeout: 1000,
			ignored: /node_modules/
		},
		overlay: true
	}
};

module.exports = app;