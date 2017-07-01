/**
 * Created by wuqili on 6/29/2017.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');


var app = express();

var con = require('./model/model_index');
var user = require('./route/user');




app.use(express.static(__dirname + '/website'));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());


require('./route/auth')(app, passport);




app.get('/register', user.register);
app.put('/addTeacher', user.addTeacher);





var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})