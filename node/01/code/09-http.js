// 1. 结合 fs 发送文件中的数据
// 2. Conyent-Type: 不同的资源对应的 Conyent-Type 是不一样的
//    图片不需要指定编码，一般只有四度数据才指定编码

var http = require("http")
var fs = require("fs")

var server = http.createServer()

server.on("request",function(req,res){
    if(req.url == "/"){
        fs.readFile("./resource/index.html",function(err,data){
            if(err){
                res.setHeader("Content-Type","text/plain;charset=utf-8")
                res.end("文件读取失败，请稍后重试")
            }else{
                res.setHeader("Content-Type","text/html;charset=utf-8")
                res.end(data)
            }
        })
    }else if(req.url == "/img"){
        // url: 用以资源定位符
        fs.readFile("./resource/a.jpg",function(err,data){
            if(err){
                res.setHeader("Content-Type","text/plain;charset=utf-8")
                res.end("文件读取失败，请稍后重试")
            }else{
                res.setHeader("Content-Type","image/jpeg")
                res.end(data)
            }
        })
    }
})

server.listen(4000,function(){
    console.log("服务器启动成功了，可以进行访问了")
})