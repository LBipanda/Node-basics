let express = require("express")

// 1.创建 app
var app = express()

app.get("/",function(req,res){
    // 计算使用了框架，也能使用 Node 原生的 API 但是不建议使用
    // res.write("hello ")
    // res.write(" express")
    // res.end()

    // res.end("hello express")
    res.send("hello express")
})
app.get("/login",function(req,res){
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/1.4.0/css/bootstrap.min.css" rel="stylesheet">
        <title>留言板</title>
        <script src="/public/js/index.js"></script>
    </head>
    <body>
        <div class="container">
            <h1>登录界面</h1>
        </div>
    </body>
    </html>`)
})

app.listen(2222,function(){
    console.log("express-helloExpress is running at port 2222")
})