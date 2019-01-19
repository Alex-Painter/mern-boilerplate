const express = require('express')
const app = express()
const port = 4000

const webpack = require('webpack')
const config = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const db = require('./dbConfig');

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.listen(port, () => console.log(`server listening on port ${port}!`))
