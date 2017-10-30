//1.引入http核心模块
var http = require("http");

//2.开启服务器
//2.1 创建服务器
var server = http.creatServer();

//2.2开启服务器
server.on("request",function (req,res) {
  //1.接受请求地址
  var url = req.url;
  //2.0根据不同的请求响应不同的内容
  if(url == "/index") {
    res.write("index");
  } else if (url == "/abc"){
    res.write("abc")
  } else {
    res.write("您请求的页面去了火星")
  }
});

//2.3开启监听
server.listen("3000",function () {
  console.log('running');
})
