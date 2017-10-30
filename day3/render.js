//引入核心模块
var fs = require('fs');
var template = require("art-template");


module.exports = function (res) {
  //作用：读取views下面的静态文件
  //参数一：url要读取的静态文件的名称  index.html  add.html
  //参数二：obj 要通过模板引擎渲染的数据
  //参数三：callback 给将来调用者设置一个回调函数，读取出数据以后怎么操作由调用者来决定
  //  现在callback中有两个参数：第一个参数是err,第二个参数是html
  //      由于我们将来对读取出来数据无非作这么几种处理：
  //          1）直接返回给浏览器，2）得到一个数据，将数据通过模板引擎进行渲染，渲染以后再返回给浏览器 

  res.render = function (url, obj, callback) {
    //获取路径
    var path = "./views/" + url;
    //读取文件中的文件 
    fs.readFile(path, function (err, data) {
      if (err) {
        return callback(err);
      }
      //将数据进行渲染,并返回到浏览器
      var html = template.compile(data.toString())(obj || {});
      callback(null, html);
    });
  };
};

