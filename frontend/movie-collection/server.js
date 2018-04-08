var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use('/api', proxy({ target: 'http://localhost:9095', changeOrigin: true }));
app.use('/public/', proxy({ target: 'http://localhost:9095', changeOrigin: true }));
app.use('/', proxy({ target: 'http://localhost:9096', changeOrigin: true }));
app.listen(3000);
