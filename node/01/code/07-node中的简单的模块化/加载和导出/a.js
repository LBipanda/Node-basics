// 在 Node 中，没有全局作用域，只有模块作用域(外部访问不到内部，内部也访问不到外部)
// 在每个文件模块中都提供一个对象：exports，exports 默认是个空对象
// 如果想要访问其它的文件模块中的变量，可以通过 exports 导出，在需要访问的页面通过 require 导入

var foo = "aaaa"

var b = require("./b.js")

console.log(foo)

console.log(b.foo)