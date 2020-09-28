let fs = require("fs")
const { callbackify } = require("util")
let dbPath = "./db.json"

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
add(){

},
/**
 * 编辑学生信息
 */
edit(){

},
/**
 * 删除学生信息
 */
delete(){

}

}

// student.js 路由模块
    // 职责：
    //     操作数据，只操作数据，不关心业务