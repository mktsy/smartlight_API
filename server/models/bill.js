const mongoose = require('mongoose')
const { Schema } = mongoose;

const billSchema =  new Schema({
    bill: {type: Number, required: true},
    startDate: {type: Date, required: true}
})

const Bill = mongoose.model('bills', billSchema)

module.exports = Bill