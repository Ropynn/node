//开启服务器
//核心 
var http = require("http");

//引入自定义模块
var render = require("./render.js");
var router = require("./router.js");

//创建服务器
var server = http.createServer();
server.on("request", function (req, res) {

  render(res);

  router(req, res);
  
});

//开启监听
server.listen(3000, function () {
  console.log("running");
});