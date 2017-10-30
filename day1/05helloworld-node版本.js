//1.引用http核心模块
var http = require("http");

//2.0开启服务器
//2.1创建服务器对象
var server = http.createServer();

//2.2开启服务器
//  request事件：在浏览器发送请求时会触发这个事件
//  回调函数：请求过来以后要执行的代码
//  回调函数有两个参数：
//      request：处理浏览器发送给服务器的数据
//      response：处理服务器发送给浏览器的数据
server.on('request', function (request, response) {
  //设置响应头
  response.writeHead(200, {
    "content-type": "text/html;charset=utf-8"
  });
  response.write('hello world');
  response.end();
});

//2.3开启监听
//  回调函数：当服务器开启成功时执行
server.listen("3000",function () {
  console.log('服务器开启成功');
});
