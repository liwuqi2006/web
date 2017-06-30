/**
 * Created by wuqili on 6/29/2017.
 */

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "1592",
    database: "yihui"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Database is Connected!");
// });

//Return id if found, otherwise return null
exports.findUser = function(login, callback){
    var sql = "SELECT * FROM user WHERE login = '" + login + "' LIMIT 1";
    console.log(sql);
    con.query(sql, function (err, result) {
        if(err) throw err;
        if(result != '') result = result[0].id;
        callback(result);
    });
};

exports.findTeacher = function(name, callback){
    var sql = "SELECT * FROM user WHERE name = '" + name + "' LIMIT 1";
    console.log(sql);
    con.query(sql, function (err, result) {
        if(err) throw err;
        if(result != '') result = result[0].id;
        callback(result);
    });
};



exports.createUser = function(info, callback){
    var sql = "INSERT INTO user (login, password,level) VALUES ('" + info.login + "','" + info.password +"','"+ info.level + "')";
    console.log(sql);
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log(result.insertId);
    });
};