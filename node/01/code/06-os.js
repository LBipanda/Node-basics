// 用来获取机器信息的
var os = require("os")

// 用来操作路径的
var path = require("path")

// 获取当前机器的 CPU 信息
console.log(os.cpus())

// 获取当前机器的总内存大小 
console.log(os.totalmem())

