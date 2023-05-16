const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://testdeploy1:long3301@cluster0.3imnp7c.mongodb.net/test1')

const songSchema = new mongoose.Schema({
    name: String,
    author: String
})

const songModel = mongoose.model('songs', songSchema)

module.exports = { songModel }