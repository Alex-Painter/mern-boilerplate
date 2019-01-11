const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	devServer: {
		contentBase: './dist'
	},

	entry: [
		      './client/index.js',
	],

	output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[hash].js',
			publicPath: '/'
	},

	resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
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
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin()
	],

	mode: 'development'
}