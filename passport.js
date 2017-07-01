/**
 * Created by wuqili on 7/1/2017.
 */

var LocalStrategy = require('passport-local').Strategy;

var user = require('/model/model_user');

module.exports = function (passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.getId()
    });





    passport.use(new LocalStrategy(
        function (username, password, done) {
            user.checkPassword(username, password, function (err, result) {
                if (err)
                    return done(err);

                return done(null, result);
            })
        }
    ));
};