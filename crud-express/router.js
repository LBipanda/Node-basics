let fs = require("fs")
let Student = require("./student.js")

// 这样也不方便（第一种方式）
// module.exports = function(app){
//     app.get("/students",(req,res) => {
//         fs.readFile("./db.json","utf8",function(err,data){
//             if(err){
//                 return res.status(500).send("Server error")
//             }
//             res.render("index.html",{
//                 // 从文件中读取的数据一定是字符串，，我们需要把字符串数据转为对象  
//                 students: JSON.parse(data).students
//             })
//         })
//     })
// }

// Express 提供了一种更好的方式，专门用来封装路由的（第二种方式）
// 1、引入 express
let express = require("express")
// 2、创建一个路由容器
let router = express.Router()

// 3、把路由都挂载到 router 路由容器中
router.get("/students",(req,res) => {
    // fs.readFile("./db.json","utf8",function(err,data){
    //     if(err){
    //         return res.status(500).send("Server error")
    //     }
    //     res.render("index.html",{
    //         // 从文件中读取的数据一定是字符串，，我们需要把字符串数据转为对象  
    //         students: JSON.parse(data).students
    //     })
    // })
    Student.findAll(function(err,students){
        if(err){
            return res.status(500).send("Server error")
        }
        res.render("index.html",{
            // 从文件中读取的数据一定是字符串，，我们需要把字符串数据转为对象  
            students: students
        })
    })
})
router.get("/students/new",(req,res) => {
    res.render("new.html")
})
router.post("/students/new",(req,res) => {
    console.log(req.body)
    Student.add(req.body,function(err){
        if(err){
            return res.status(500).send("Server error")
        }
        res.redirect("/students")
    })

})
router.get("/students/edit",(req,res) => {
    // 根据参数查出对应的信息
    // 使用模板引擎渲染页面
    Student.findById(parseInt(req.query.id),function(err,student){
        if(err){
            return res.status(500).send("Server error")
        }
        console.log(student)
        res.render("edit.html",{
            student: student
        })
    })
})
router.post("/students/editById",(req,res) => {
    Student.editById(req.body,function(err){
        if(err){
            return res.status(500).send("Server error")
        }
        res.redirect("/students")
    })
})
router.get("/students/delete",(req,res) => {
// 获取id，根据id删除对应的信息
    Student.delete(req.query.id,function(err){
        if(err){
            return res.status(500).send("Server error")
        }
        res.redirect("/students")
    })
})

//把 router 路由容器抛出
module.exports = router

// router.js 路由模块
    // 职责：
    //     处理路由
    //     根据不同的请求方法+请求路径设置具体的处理函数