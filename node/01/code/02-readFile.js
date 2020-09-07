var fs = require("fs")

// 读文件
// 第一个参数：要读取的文件路径
// 第二个参数：回调函数
// 成功 data 文件写入成功;  err null;
// 失败 data 文件写入失败; err 错误对象
fs.readFile("../file/createdOne.md",function(err,data){
    // console.log(data)// <Buffer e5 a4 a7 e5 ae b6 e6 88 91 e6 98 af 4e 6f 64 65 2e 6a 73>
    // 文件中储存的都是二进制数据，为甚看到的不是 0 和 1 呢？因为自动把二进制转为十六进制了
    // 我们可以用toString()方法把其转换为我们认识的字符
    if(err){ //判断读取文件是否错误
        console.log("读取文件失败")
        return
    }
    console.log(data.toString())//大家好，给大家介绍一下，我是Node.js
})