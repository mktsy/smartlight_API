const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    pin: String,
    role: String
})
const lightSchema = mongoose.Schema({
    lightNumber: Number,
    state: Boolean,
    color: String,
    timeOn_state: Boolean,
    timeOff_state: Boolean,
    setTimeOn_hour: Number,
    setTimeOn_min: Number,
    setTimeOff_hour: Number,
    setTimeOff_min: Number,
    bill: Number
})

const User = mongoose.model('createusers', userSchema)
const Light = mongoose.model('vault001_for_app_collection', lightSchema)

module.exports = {users: User, lights: Light}