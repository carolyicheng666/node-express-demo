var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var getData = [{
    data: 213,
    num: 444,
    age: 12
  },
  {
    data: 456,
    num: 678,
    age: 13
  }
];

var postData = {error: 0, status: "success"};

//写个接口
app.get('/get', function(req, res) {
  res.status(200).json(getData)
}).post('/post', function(req, res) {
  res.status(200).json(postData)
});

//配置服务端口
var server = app.listen(3000, function() {

  var host = server.address().address;

  var port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}/`);
})