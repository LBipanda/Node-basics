const { response } = require("express");

let express = require("express") 

let app = express()

app.engine('html', require('express-art-template'));

app.use("/node_modules",express.static("./node_modules"))
app.use("/public",express.static("./public"))

app.get("/",(req,res) => {
    res.render("index.html",{
        fruits:[
            "苹果",
            "香蕉",
            "栗子",
            "无花果",
        ]
    })
})

app.listen(1111,() => console.log("crud-express is running at port 1111"))