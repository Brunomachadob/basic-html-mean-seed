var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function () {
    passport.use('local', new LocalStrategy(
        function (username, password, done) {
            console.log(username, password);

            process.nextTick(function () {
                User.findOne(
                    { "username": username },
                    function (err, user) {
                        if (err) {
                            done(err);
                        }

                        if (!user) {
                            done(null, false, { message: 'Incorrect username.' });
                        } else if (user.password != password) {
                            done(null, false, { message: 'Incorrect password.' });
                        } else {
                            return done(null, user);
                        }
                    }
                    );
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id).exec()
            .then(function (user) {
                done(null, user);
            });
    });
};