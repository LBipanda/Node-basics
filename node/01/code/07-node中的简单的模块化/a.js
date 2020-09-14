// require 是一个方法
// 它的作用是用来加载模块的
// 在 Node 中，模块有三种：
//         1. 具名的核心模块，例如 fs、http
//         2. 用户自己编写的文件模块
//         3. 相对路径必须加 ./

// 在 Node 中，没有全局作用域，只有模块作用域(外部访问不到内部，内部也访问不到外部)

var foo = "aaa"

console.log("a strat")

require("./b.js")

console.log("a end")

console.log(foo)