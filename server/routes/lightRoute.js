const router = require('express-promise-router')()
const Light = require('../controllers/lights')

router.route('/lights')
    .get(Light.getAllLights)

router.route('/lights/:_id')
    .get(Light.getLightById)

router.route('/lights/state/:_id')
    .patch(Light.updateLightState)

router.route('/lights/on/:_id')
    .patch(Light.updateLightTimeOn)

router.route('/lights/off/:_id')
    .patch(Light.updateLightTimeOff)
    
module.exports = router