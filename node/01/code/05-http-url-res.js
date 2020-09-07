var http = require("http")//引入http模块

var server = http.createServer()//创建server

// 监听request请求事件，设置请求函数
server.on("request",function(resquest,response){
    if(resquest.url == "index"){
        // console.
    }
})

// 绑定端口号，启动服务
server.listen(4444,function(){
    console.log("服务器启动成功了，可以进行访问了")
})