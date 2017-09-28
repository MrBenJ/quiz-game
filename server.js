const path = require('path');
const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const pathIndex = path.resolve(__dirname, 'dist');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    hot: true,
    contentBase: pathIndex
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', (req, res) => {
    res.sendFile(pathIndex+'/index.html');
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
