var foo = "bbbbbb"

function add(x,y){
    return x + y
}
// 如果一个模块需要直接导出某个成员，而非挂载的方式导出
// 可以使用 module.exports 的方式，如下面这种方式
module.exports = "heelo"

// 挂载的方式导出
exports.foo = foo