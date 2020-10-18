let fs = require("fs")
const { callbackify } = require("util")
let dbPath = "./db.json"

// Node.js 异步编程的直接体现就是回调。异步编程依托于回调来实现
// 如果需要获取一个函数中的异步操作结果，必须通过回调函数来获取
module.exports={
/**
 * 获取所有学生信息列表
 * callback 中的参数
 * 第一个参数 成功 null ；错误 错误对象
 * 第一个参数 成功 数组 ；错误 undefined
 */
findAll(callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
},
/**
 * 添加学生信息
 */
add(student,callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            callback(err)
        }
        var tempStudents = JSON.parse(data).students
        student.id = tempStudents.length + 1
        tempStudents.push(student)
        var fileData = JSON.stringify({students: tempStudents})
        fs.writeFile(dbPath,fileData,function(err2){
            if(err2){
                callback(err2)
            }
                callback(err2) //文件写入成功的话 res2 为null
        })
    })
},
// 根据id查出对应的信息
findById(id,callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            callback(err)
        }
        var tempStudents = JSON.parse(data).students//获取所有学生信息
        //修改学生信息
        var tempStu = tempStudents.find(function(item){
            return item.id == id
        })
        callback(null,tempStu)
    })
},
/**
 * 编辑学生信息
 */
editById(student,callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            callback(err)
        }
        var tempStudents = JSON.parse(data).students//获取所有学生信息
        //修改学生信息
        var tempStu = tempStudents.find(function(item){
            return item.id == student.id
        })
        // console.log(tempStu)
        for(let key in student){
            tempStu[key] = student[key]
        }
        var fileData = JSON.stringify({students: tempStudents})
        fs.writeFile(dbPath,fileData,function(err2){
            if(err2){
                callback(err2)
            }
                callback(err2) //文件写入成功的话 res2 为null
        })
    })
},
/**
 * 删除学生信息
 */
delete(id,callback){
    fs.readFile(dbPath,"utf8",function(err,data){
        if(err){
            return callback(err)
        }
        var tempStudents = JSON.parse(data).students//获取所有学生信息
        //修改学生信息
        // console.log(id)
        var tempIndex = tempStudents.findIndex(function(item){
            // console.log(item.id)
            return item.id == id
        })
        tempStudents.splice(tempIndex,1)
        var fileData = JSON.stringify({students: tempStudents})
        fs.writeFile(dbPath,fileData,function(err2){
            if(err2){
                callback(err2)
            }
                callback(err2) //文件写入成功的话 res2 为null
        })
    })
}

}
// 封装异步 API

// student.js 路由模块
    // 职责：
    // 操作数据，只操作数据，不关心业务