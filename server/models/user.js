const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema =  new Schema({
    name: {type:String, required:[true, 'Why are you not insert you name!']},
    lastName: {type:String, required:true},
    email: {type:String, required:true, unique:[true, 'test']},
    password: {type:String, required:true},
    pin: {type:String, required:true},
    role: {type:String, default: 'User', enum: ['Admin', 'User']},
})

const User = mongoose.model('createuser', userSchema)

module.exports = User