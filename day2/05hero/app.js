//引入http核心模块
var http = require("http");
var fs = require("fs");
var template = require("art-template");
//开启服务器
var server = http.createServer();
server.on("request", function (req, res) {
  //获取输入的网址
  var url = req.url;
  //当读取根目录时，我们需要返回首页
  if (url == '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('失败');
      }
      fs.readFile('./data.json', function (err, heroData) {
        if (err) {
          return res.end("失败");
        }
        // console.log(heroData);
        //现在得到的数据是16进制的数组
        var heros = JSON.parse(heroData.toString());
        // console.log(heros);
        var render = template.compile(data.toString());
        var html = render(heros);
        res.end(html);
      });
    });
  }
  else if (url.indexOf("/node_modules") == 0 || url.indexOf("/img") == 0) {
    var path = "." + url;
    fs.readFile(path, function (err, data) {
      if (err) {
        return res.end("失败");
      }
      res.end(data);
    });
  }
  });

//开启监听
server.listen(3000, function () {
  console.log("running");
});