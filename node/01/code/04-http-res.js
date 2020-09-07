//第一步、加载 http 模块
var http = require("http")

//第二步、 使用 http.createServer() 方法创建一个 web 服务器
var server = http.createServer()

//第三步、 注册 request 请求事件
// 当客户端请求过来，就会自动触发服务器的 request 事件，然后执行第二参数：回调处理函数
// request 请求事件处理函数，需要接收两个参数(request,response)
// request：请求对象（请求对象可以用来获取客户端的一些请求信息，例如请求路径）
// response：响应对象（响应对象可以用来给客户端发送响应信息）
server.on("request",function(request,response){
    console.log("收到客户端请求了，请求路径是"+request.url)

    //response 有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
    response.write("hello")
    response.write("node.js")
    //告诉客户端，服务器响应结束了
    response.end()

    // 这个简单的服务器的能力非常弱，无论什么请求，都只能响应 hello node.js
    // 升级： 我希望当请求的路径不一样的时候，响应的结果也不一样
    // 例如：/index  /login（登陆） /register（注册页面）这几个页面的返回不同的响应数据
    在05-http-url-response.js中查看
})

// 第四步、绑定端口号，启动服务器
server.listen(3333, function(){
    console.log('服务器启动成功了，可以通过 localhost:3333 进行访问')
})