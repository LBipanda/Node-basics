// art-tempalte （不仅可以在有拉起使用，服务端也能使用）

// 安装：
//     npm install art-template
//     该命令在那个包下执行，就会下载到哪里，默认下载到 node_modules (千万不要修改)

// 在 Node 中使用 art-tempalte 模板引擎
//     1. 安装 art-tempalte （npm install art-template）
//     2. 在需要使用的文件模板加载 art-tempalte
            // 只需要使用 require 方法加载就行：require("art-tempalte")
            // 也就是说 install 的名字是什么，则 require 中的模板名就是什么
//     3. 查文档，使用模板引擎的 API

var template = require("art-template")
var fs = require("fs")

fs.readFile("./tpl.html",function(err,data){
    if(err){
        return console.log("读取文件失败")
    }else{
        // 默认读取到的 data 是二进制数据，而模板引擎 render 方法需要接收的是字符串
        // 通过 toString() 方法把 data 二进制数据转为字符串
        // 在 node 中使用的格式：template('script 标签 id', {对象})
        var ret = template.render(data.toString(),{
            name: 'LBipanda',
            age: 18,
            height: 178
        })
        console.log(ret)
    }
})

