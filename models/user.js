const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://testdeploy1:long3301@cluster0.3imnp7c.mongodb.net/test1')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: [String],
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'songs' }]
})

const userModel = mongoose.model('users', userSchema)

module.exports = { userModel }