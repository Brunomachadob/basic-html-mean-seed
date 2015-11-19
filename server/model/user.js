var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var userSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    auth: {
        name: String,
        password: String
	}
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);