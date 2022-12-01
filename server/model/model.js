const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb