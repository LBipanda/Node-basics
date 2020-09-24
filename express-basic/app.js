let express = require("express")

//创建服务器应用程序
// 也就是原来的 http.createServer()
var app = express()

// 公开指定目录
// 只要这样做了，就可以直接通过 /public/XX 的方式访问 public 目录中的所有资源了
app.use("/public/",express.static("./public/"))

// 当服务器收到 get 请求 / 的时候，执行回调函数
app.get("/",function(req,res){
    res.send("hello express")
})
app.get("/product",function(req,res){
    res.send("你好 product!!!!!!")
})
// app.get("/template",function(req,res){
//     // 在 Express 中使用模板引擎：resrender("文件名",{模板对象})

// })

// 相当于server.listen
app.listen(1949,function(){
    console.log("express is running at port 1949")
})