
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    accountID: { type: String, require: true },
    email: { type: String, index: true, unique: true, require: true },
    password: { type: String, require: true },
    todo: [{
        timeCreated: [{
            
        }],
    }]
});
UserSchema.plugin(uniqueValidator);

const User = module.exports = mongoose.model('User', UserSchema);

module.exports = getUserById = ( (given_email, callback) => {
    User.findById({ email: given_email }, callback);
})