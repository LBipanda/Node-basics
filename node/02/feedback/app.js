var http = require("http")
var fs = require("fs")
var url = require("url")
var template = require("art-template")

// 我们为了统一处理警惕资源，我们约定把所有的静态资源都存放到 public 目录中
var comments = [
    { name: "LBipanda", message: "撒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"},
    { name: "李斌", message: "爱爱爱爱"},
    { name: "葛亮", message: "萨拉还有"},
]

http.createServer(function(req, res){
    // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 直接将查询字符串转为一个对象（通过 query 属性访问)
    var parseObj = url.parse(req.url,true)
    //单独获取查询字符串的路径部分（该路径不包含 ? 之后的内容）
    var pathname = parseObj.pathname
    if(pathname === "/"){
        fs.readFile("./view/index.html",function(err,data){
            if(err){
                return res.end("page 404")
            }
            var ret = template.render(data.toString(),{
                comments: comments
            })
            res.end(ret)
        })
    }else if(pathname === "/addInfo"){
        fs.readFile("./view/addInfo.html",function(err,data){
            if(err){
                return res.end("page 404")
            }
            res.end(data)
        })
    }else if(pathname === "/add"){
        console.log("收到请求了",parseObj.query)
        // res.end(JSON.stringify(parseObj.query))
        // 获取表单提交的数据，parseObj.query 存储到comment 中
        comments.unshift(parseObj.query)
        //数据存储成功后 重定向跳转到首页
        // 301 永久重定向（游览器会记住）
        // a.com   b.com
        // a 游览器不会请求 a.com 了，会直接请求 b.com
        // 302 临时重定向（游览器不会记住）
        // a.com   b.com
        // a 游览器还会请求 a.com 了，会直接请求 b.com
        // 状态码 302 临时重定向，在响应头中通过 location 告诉客户端往哪里重定向
        // 客户端收到服务端响应的状态码是 302 ，就会自动去请求头中找 location，然后对该地址发起新的请求
        // 所以会发现客户端自动跳转了
        res.statusCode = 302
        res.setHeader("Location","/")
        res.end()
    }else if(pathname.indexOf("/public") == 0){
        // 统一处理：如果请求路径以 /public/ 开头的，我会认为你要获取 public 中的某个静态资源
        // 所以问哦们会直接把请求路径当文件路径读取
        // console.log(pathname)
        fs.readFile("." + pathname,function(err,data){
            if(err){
                return res.end("static 404")
            }
            res.end(data)
        })
    }else{
        fs.readFile('./view/404.html',function(err,data){
            if(err){
                return res.end("static 404")
            }
            res.end(data)
        })
    }
}).listen(5000,function(){
    console.log("服务已启动......")
})