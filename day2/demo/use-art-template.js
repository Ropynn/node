var template = require("art-template");
// var http = require("http");
// var fs = require("fs");


// //创建服务器
// var server = http.createServer();
// //开启服务器
// server.on("request", function (req, res) {
//   res.
// });
var str = "<ul>{{each arr}}<li>{{$value}}</li> {{/each}}</ul>";

var render = template.compile(str);
var res = render({
  arr:["rose","jack","tom","liLei"]
});
console.log(res);