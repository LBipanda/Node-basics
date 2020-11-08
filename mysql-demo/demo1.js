var mysql = require('mysql');

// 1、创建连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'node_mysql'
});

// 2、连接数据库（打开冰箱）
connection.connect();

// 3、执行数据操作（把大象放进去）
// 这里执行 sql 语句 进行数据的操作
//获取 users 表里面的数据
connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

//插入一条数据
// connection.query('INSERT INTO users VALUES("01", "admin", "123456")', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// 4、关闭连接（关闭冰箱门）
connection.end();