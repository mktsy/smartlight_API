const Light = require('../models/light')

module.exports = {
    getAllLights: async (req, res) => {
        const result = await Light.find({})
        res.status(200).send(result)
    },
    getLightById: async (req, res) => {
        const { _id } = req.params
        const result = await Light.findById(_id)
        res.status(200).send(result)
    },
    updateLight: async (req, res) => {
        const {_id} = req.params
        const {state, color, timeOn_state, timeOff_state, setTimeOn_hour, setTimeOn_min, setTimeOff_hour, setTimeOff_min} = req.body
        const update = Object.assign(
                                {state: state}, {color: color}, {timeOn_state: timeOn_state}, 
                                {timeOff_state: timeOff_state}, {setTimeOn_hour: setTimeOn_hour}, 
                                {setTimeOn_min: setTimeOn_min}, {setTimeOff_hour: setTimeOff_hour},
                                {setTimeOff_min: setTimeOff_min})
        const result = await Light.findByIdAndUpdate(_id, update, {runValidators: true, new: true})
        res.status(200).send(result)
    }
}