/**
 * Created by wuqili on 6/29/2017.
 */

var express = require('express');
var path = require('path');
var app = express();

var user = require('./route/user');
var view = require('./route/view')

app.use(express.static(__dirname + '/website'));




app.get('/register', user.register);
app.put('/addTeacher', user.addTeacher);


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})