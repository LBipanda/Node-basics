let mongoose = require("mongoose")

var Schema = mongoose.Schema

//一、连接数据库
// 指定连接的数据库不需要一定不存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost/itcast")

// 二、设计文档结构（表结构）
//字段名称就是表结构中的属性名称
//值
// 约束的目的是为了保证数据的完整性，不要有脏数据
const userSchema = new Schema({
    username:  {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
});

// 三、将文档结构发布为模型
// mongoose.model 方法就是为了用来将一个架构发布为 model
//     第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                 mongoose 会自动将大写名词的字符串生成 小写复数 的集合名词
//                 例如这里的 User 最终会变成 users 集合名称
//     第二个参数：架构 Schema
//     返回值：模型构造函数
const User = mongoose.model('User', userSchema);

// 四、当我们有了模型构造函数之后，就可以使用这个构造函数对 User 中的数据为所欲为了（增删改查）

//新增
// let admin = new User({
//     username: "zhangSan",
//     password: "123456",
//     email: "zhangSan@zhangSan.com"
// })
// admin.save(function(err,ret){
//     if(err){
//         console.log("保存失败")
//     }else{
//         console.log("保存成功")
//         console.log(ret)
//     }
// })

//查询
// 查询所有（ret返回数组）
User.find(function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
        console.log(ret)
    }
})
//按条件查询（ret返回数组）
User.find({username: "zhangSan"},function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
        console.log(ret)
    }
})
//按条件查询,查询符合条件的第一个（ret返回对象）
User.findOne({password: "123456"},function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
        console.log(ret)
    }
})