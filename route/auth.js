/**
 * Created by wuqili on 7/1/2017.
 */


var user = require('../model/model_user');

module.exports = function(app, passport){


    app.post('/login', passport.authenticate('local',{successRedirect:'/'}), function(req, res){
        res.redirect('/');
    });
    app.post('/logout', function(req,res){
       req.logout();
       res.redirect('/login.html');
    });

    app.get('/test', function(req, res){
        user.findUser('teadfasst', function(err, result){
            console.log(result);
        })
    });



};