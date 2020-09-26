let express = require("express")
// let initRouter = require("./router.js")//(router 第一种方式)
let router = require("./router")//(router 第二种方式)
var bodyParser = require('body-parser')

let app = express()

// 配置模板引擎 和 body-parser 一定要在 挂载路由之前
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/node_modules",express.static("./node_modules"))
app.use("/public",express.static("./public"))


// initRouter(app)//(router 第一种方式)
// 把 router 路由容器挂载到 app 服务中
app.use(router)

app.listen(1111,() => console.log("crud-express is running at port 1111"))

// app.js 项目入口模块
    // 职责：
    // 创建服务
    // 做一些服务的相关配置
    // 模板引擎
    // 提供静态资源服务
    // 解析 post 请求参数
    // 挂载路由
    // 监听端口、启动服务
