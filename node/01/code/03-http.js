const { Http2ServerRequest } = require("http2")

// 1.使用 Node 构建一个 Web 服务器
// 2.在 Node 中专门提供了一个核心模块： Http
// 3.http 这个模块的职责专门帮你编写服务器的

//第一步、加载 http 模块
var http = require("http")

//第二步、 使用 http.createServer() 方法创建一个 web 服务器
// 返回一个 Server 实例
var server = http.createServer()

// 服务器要干嘛？
//     提供服务：对 数据 的服务
//     发请求、接收请求、处理请求
//     给反馈（发送响应）

//第三步、 注册 request 请求事件
// 当客户端请求过来，就会自动触发服务器的 request 事件，然后执行第二参数：回调处理函数
server.on("request",function(){
    console.log("收到客户端请求了")
})

// 第四步、绑定端口号，启动服务器
server.listen(3333, function(){
    console.log('服务器启动成功了，可以通过 localhost:3333 进行访问')
})