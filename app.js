var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Mock = require('mockjs');

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var getData = [{
  data: 213,
  num: 444,
  age: 12
},{
  data: 456,
  num: 678,
  age: 13
}];

var postData = {error: 0, status: "success"};

var mockData = Mock.mock({
  'error': 0,
  'list|10': [{
    'id|+1': 1
  }]
})

//写个接口
app.get('/get', function(req, res) {
  if (req.query.id == 1) {
    res.status(200).json(getData)
  } else {
    res.status(404).send('get error!')
  }
}).post('/post', function(req, res) {
  if (req.body.id == 2) {
    res.status(200).json(postData)
  } else {
    res.status(404).send('post error!')
  }
}).get('/mock', function(req, res) {
  res.status(200).json(mockData)
});

//配置服务端口
var server = app.listen(3000, 'localhost', function() {

  var host = server.address().address;

  var port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}/`);
})