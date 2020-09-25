let express = require("express");
var bodyParser = require('body-parser')   

let app = express()

app.use("/public",express.static("./public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var comments = [
    { name: "LBipanda", message: "撒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"},
    { name: "李斌", message: "爱爱爱爱"},
    { name: "葛亮", message: "萨拉还有"},
]

// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然没有直接引用 art-template ，但是 art-template 也比要要安装
// 因为 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));

// Express 为 response 响应对象提供了一个方法：render
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render("html模板名",{模板数据})
// 第一个参数不能写路径，因为默认会去取项目中的 views 目录中查找该文件模板
// 也就是说 Express 有一个约定，开发人员把所有的视图文件都放在 views 目录中
// 如果想要修改默认的 views 视图渲染存储目录，则可以
// app.set("views",目录路径)
app.get("/",(req,res) => {
    res.render("index.html",{
        comments
    })
})

app.get("/addInfo",(req,res) => {
    res.render("addInfo.html")
})

// 表单 get 请求
// app.get("/add",(req,res) => {
//     let data = req.query;
//     comments.unshift(data)
//     // res.statusCode = 302
//     // res.setHeader("Location","/")
//     res.redirect("/")
// })

// 表单 post 请求
app.post("/add",(req,res) => {
    let data = req.body;
    comments.unshift(data)
    // res.statusCode = 302
    // res.setHeader("Location","/")
    res.redirect("/")
})

app.listen(2222,() => {
    console.log("feedback is running at port 2222")
})