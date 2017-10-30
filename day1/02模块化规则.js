//CMD规范：
//  定义模块：define
//  暴露接口：不需要暴露
//  引用模块：关键字：require
//NodeJS规范：
//  定义模块：不需要使用任何关键字，直接创建一个js文件，它就是一个单独的模块
//  暴露接口：使用module.exports关键字来暴露接口
//  引用模块：关键字：require



//引用app.js模块
//引用的关键字
var api = require("./03api.js");
var sum = api.getSum(1,2);
console.log(sum);