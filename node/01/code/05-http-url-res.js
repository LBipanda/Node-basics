var http = require("http")//引入http模块
const { write } = require("fs")

var server = http.createServer()//创建server

// 监听request请求事件，设置请求函数
server.on("request",function(request,response){
    console.log(request.url)
    // response.write("hello node")

    // write的方式比较麻烦，推荐使用 end 的同时发送响应数据
    // response.end("hello end")

    // 根据 url 响应不同的数据
    // 响应内容只能是二进制数据或者二字符串
    var url = request.url
    if(url === "/"){
        response.end("index pages")
    }else if(url === "/login"){
        response.end("login pages")
    }else if(url === "/product"){
        var goods = [
            {
                name: "苹果",
                price: 1111
            },
            {
                name: "梨子",
                price: 2222
            }
        ]
        response.end(JSON.stringify(goods))
    }else{
        response.end("404 Not Fount")
    }
})

// 绑定端口号，启动服务
server.listen(4444,function(){
    console.log("服务器启动成功了，可以进行访问了")
})