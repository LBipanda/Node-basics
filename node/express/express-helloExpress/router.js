let express = require("express")

// 1.创建 app
var app = express()

// 当以 /page 开头的时候，去 ./public 目录中找相对应的资源
// 这种方式更加容易辨识，推荐这种方式（游览器url http://localhost:2222/page/login.html）
app.use("/page",express.static("./public"))

// app.use("/page",express.static(path.join(__dirname,"./public")))

// 当省略第一个参数的时候，则可以通过省略 /page 目录中找相对应的资源
// app.use(express.static("./public"))

app.get("/",function(req,res){
    res.send("hello express")
})
app.listen(2222,() => console.log("express-helloExpress is running at port 2222") )