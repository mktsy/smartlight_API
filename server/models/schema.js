const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    pin: String,
    role: String
})
