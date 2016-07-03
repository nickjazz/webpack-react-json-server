/*global require */
var fakeData = require('./fake_data.js');
var jsonServer = require('json-server');
var fs = require('fs');
var server = jsonServer.create();
var data = fakeData();
var middlewares = jsonServer.defaults();
var router = jsonServer.router('db.json');

fs.writeFileSync('db.json', JSON.stringify(data));

server.use(middlewares);
server.use(router);
server.listen(3000);
