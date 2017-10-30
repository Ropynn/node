//接收一个两个数据相加的API
function getSum(num1,num2) {
    return num1 + num2;
}
//将模块的接口暴露出去
//暴露的关键字是
module.exports.getSum = getSum;

