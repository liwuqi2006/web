/**
 * Created by wuqili on 7/1/2017.
 */

var con = require('./model_index');


exports.getUserbyUsername = function(username, callback){
    var sql = "SELECT * FROM user WHERE login = '" + username + "' LIMIT 1";
    con.query(sql, function (err, result) {
        if(err) callback(err);
        callback(err, result ? result[0] : result);
    });
};

exports.checkPassword = function(user, password, callback){
    if(user.password === ''){
        callback(Error('No password stored'))
    }
    else if(user.password == password){
        
    }
};