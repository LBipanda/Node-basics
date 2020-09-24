var fs = require("fs")
// 在 Node 中问价操作和模板加载以 / 开头都是取当前目录的根目录

//咱们所有使用的所有人间操作的 API 都是异步的（就像 ajax 请求一样）
//文件操作中的相对路径可以省略 ./
fs.readFile("data/foo.txt",function(res,data){
    if(res){
        return console.log("读取失败")
    }
    console.log(data.toString())
})

// 在模板加载中，相对路径中的 ./ 不能省略
// require("data/foo.js") //报错：  Cannot find module 'data/foo.js'

require("./data/foo.js")("node")