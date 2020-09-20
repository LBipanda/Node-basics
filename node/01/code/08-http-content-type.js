var http = require("http")

var server = http.createServer()

server.on("request",function(req,res){
// 在服务器默认发送的数据，都是 utf8 编码内容，但是游览器不知道是 utf8 的内容
// 游览器会默认按章当前操作系统的编码去解析（中文操作系统默认是 gbk）
// 在 http 协议中，Content-Type 是告诉游览器响应的内容是什么类型
    // res.setHeader("Content-Type","text/plain;charset=utf-8")
    // res.end("hello 世界")
    if(req.url == "/plain"){
        // text/plain 就是普通文本
        res.setHeader("Content-Type","text/plain;charset=utf-8")
        res.end("hello 世界")
    }else if(req.url == "/html"){
        // 如果发送的是 html 格式的字符串，也要告诉游览器游览器响应的是 text/html 格式的内容
        res.setHeader("Content-Type","text/html;charset=utf-8")
        res.end("<h1>你好 Node</h1>")
    }
})

server.listen(4000,function(){
    console.log("服务器启动成功了，可以进行访问了")
})