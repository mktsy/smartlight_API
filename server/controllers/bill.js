const Bill = require('../models/bill')
const Light = require('../models/light')

module.exports = {
    getBills: async (req, res) => {
        const result = await Bill.find({})
        res.status(200).send(result)      
    },
    getLastBill: async (req, res) => {
        const result = await Bill.findOne().sort({_id: -1})
        res.status(200).send(result)
    },
    createBill: async (req, res) => {
        const bill = req.body;
        Bill.create({ ...bill }, (err, result) => {
            if (err) {
                return res.status(409).json({ err })
            }
            res.status(201).json(result)
        })
    },
    updateBill: async (req, res) => {
        const { _id } = req.params
        const lightTime = await Light.find({})
        var time = 0
        for (var i in lightTime) {
            time += lightTime[i].bill
        }
        var p_watt = 2.5
        var time = time / 3600
        var service = 8.19
        var unit = (p_watt * time) / 1000
        // var unit = 600
        var baseE = 0
        var ft = 0
            if (unit > 5) {
                ft = (-15.32 / 100) * unit
                unit -= 5
                if (unit > 10) {
                    baseE = baseE + 2.3488 * 10
                    unit -= 10
                    if (unit > 10) {
                        baseE = baseE + 2.9882 * 10
                        unit -= 10
                        if (unit > 10) {
                            baseE = baseE + 3.2405 * 10
                            unit -= 10
                            if (unit > 65) {
                                baseE = baseE + 3.6237 * 65
                                unit -= 65
                                if (unit > 50) {
                                    baseE = baseE + 3.7171 * 50
                                    unit -= 50
                                    if (unit > 250) {
                                        baseE = baseE + 4.2218 * 250
                                        unit -= 250

                                        baseE = baseE + 4.4217 * unit
                                        
                                    } else {
                                        baseE = baseE + 4.2218 * unit
                                    }
                                }  else {
                                    baseE = baseE + 3.7171 * unit
                                }
                            } else {
                                baseE = baseE + 3.6237 * unit
                            }
                        } else {
                            baseE = baseE + 3.2405 * unit
                        }
                    } else {
                        baseE = baseE + 2.9882 * unit
                    }
                } else {
                    baseE = 2.3488 * unit
                }
                baseE += 11.74
            } else {
                baseE = 0.0
            }
        baseE += service
        baseE += ft
        var vat = baseE * 0.07
        var totalBill = baseE + vat
        const update = Object.assign({bill: totalBill})
        const result = await Bill.findByIdAndUpdate(_id, update, {runValidators: true, new: true})
        res.status(200).send(result)
    }

}