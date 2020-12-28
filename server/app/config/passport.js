const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user.model');
const config = require('../config/mongodb.config');


module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
  opts.secretOrKey = config.secret;
  passport.use('user-login', new JwtStrategy(opts, (jwt_payload, done) => {

    User.getShopperById(jwt_payload._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });

  }));
}