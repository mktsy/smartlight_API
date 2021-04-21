const mongoose = require('mongoose')

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

const Light = mongoose.model('CreateLight', lightSchema)

export default Light