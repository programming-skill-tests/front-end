var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
//notes
app.use('/api', proxy({target: 'http://localhost:9090', changeOrigin: true}));
app.use('/public/', proxy({target: 'http://localhost:9090', changeOrigin: true}));
app.use('/tnyLnk/', proxy({target: 'http://localhost:9090', changeOrigin: true}));

app.use('/', proxy({target: 'http://localhost:9091', changeOrigin: true}));
app.listen(3000);
