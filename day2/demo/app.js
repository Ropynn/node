//引入http核心模块
var http = require("http");
var fs = require("fs");
var template = require("art-template");

//创建一个服务器对象
var server = http.createServer();

//开启服务器
server.on("request",function(req,res){
    //1.0接收请求的地址
    var url = req.url;
    //2.0判断：当请求根目录时，我们要将静态文件读取出来，响应回浏览器
    if(url == "/") {
        fs.readFile("./views/index.html",function(err,data){
            if(err) {
                return res.end("失败");
            }
            res.end(data);

        });
    }
});

//开启监听
server.listen("3000",function(){
   console.log("running"); 
});