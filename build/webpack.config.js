const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	//入口
	entry: path.resolve(__dirname, '../src/index.js'),
	//出口 
	output: {
		filename:'index.js',
		path: path.resolve(__dirname, '../dist')
	},
	module:{
		rules: [
			{test: /.(js|jsx)?$/, use: ['babel-loader']},
			{test: /\.scss?$/, use: ['style-loader','css-loader','sass-loader']}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: 'body',
			title: 'react'
		})
	],
	devServer: {
		port: 8080,
		open: true,
		hot: true
	}
}