const mongoose = require('mongoose')

const lightSchema = mongoose.Schema({
    lightNumber: {type: Number, required: true},
    state: {type: Boolean, required: true},
    color: {type: String, required: true, default: 'off'},
    timeOn_state: {type: Boolean, required: true, default: false},
    timeOff_state: {type: Boolean, required: true, default: false},
    setTimeOn_hour: {type: Number, required: true, default: 0},
    setTimeOn_min: {type: Number, required: true, default: 0},
    setTimeOff_hour: {type: Number, required: true, default: 0},
    setTimeOff_min: {type: Number, required: true, default: 0},
    bill: {type: Number, required: true, default: 0},
})

const Light = mongoose.model('lights', lightSchema)

module.exports = Light