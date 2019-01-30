const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',

	entry: [
    	'./client/index.js'
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},

	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: 'awesome-typescript-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				exclude: '/node_modules/',
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]

			},
			{
		        test: /\.(jpe?g|gif|png|svg)$/i,
		        loader: 'url-loader?limit=10000'
			},
			{
				enforce: "pre", test: /\.js$/, loader: "source-map-loader"
			}
		]
	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},

	plugins: [
		new HtmlWebpackPlugin()
	],

	mode: 'development'
}