var fs = require("fs")

// 写文件
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
fs.writeFile("../file/createdOne.md","大家好，给大家介绍一下，我是Node.js",function(err){
    if(err){ //判断读取文件是否错误
        console.log("文件写入失败")
    }else{
        console.log("文件写入成功")
    }
})