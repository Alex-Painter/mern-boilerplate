const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	entry: [
    	'./client/index.js'
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: '/node_modules/',
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]

			},
			{
				test: /\.js|jsx$/,
				exclude: '/node_modules/',
				use: {
			        loader: 'babel-loader',
			        options: {
			        	presets: ['@babel/preset-env', '@babel/preset-react']
			        }
			     }
			},
			{
		        test: /\.(jpe?g|gif|png|svg)$/i,
		        loader: 'url-loader?limit=10000'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin()
	],

	mode: 'development'
}