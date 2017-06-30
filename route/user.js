/**
 * Created by wuqili on 6/29/2017.
 */

var db = require('../model');
var path = require('path');


exports.register = function(req, res) {
    db.findUser('test2', function(user) {
        if (user != '') {
            res.json(null);
            console.log('Found user');
            return;
        } else {
         db.createUser({login: 'test', password: '123456', level: 0}, function(){})
        }
    });
};



exports.addTeacher = function(req, res) {
    db.findUser('find', function(user) {
        if (user != '') {
            res.json(null);
            console.log('Found user');
            return;
        } else {
            db.createUser({login: 'test', password: '123456', level: 0}, function(){})
        }
    });
};

exports.test = function(req, res) {
      res.sendFile(path.join(__dirname+'/login.html'));
};
