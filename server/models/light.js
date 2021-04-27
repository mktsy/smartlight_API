const mongoose = require('mongoose')

const lightSchema = mongoose.Schema({
    name: {type: String, required: true},
    lightNumber: {type: Number, required: true},
    state: {type: Boolean, required: true},
    color: {type: String, required: true, default: 'off'},
    setTimeOn_hour: {type: String, required: true, default: 0},
    setTimeOn_min: {type: String, required: true, default: 0},
    setTimeOff_hour: {type: String, required: true, default: 0},
    setTimeOff_min: {type: String, required: true, default: 0},
    bill: {type: Number, required: true, default: 0},
})

const Light = mongoose.model('lights', lightSchema)

module.exports = Light