const router = require('express-promise-router')()
const Light = require('../controllers/lights')
const middleware = require('../middleware/middleware')

router.route('/lights')
    .all(middleware.checkAuth)
    .get(Light.getAllLights)

router.route('/lights/:_id')
    .all(middleware.checkAuth)
    .get(Light.getLightById)

router.route('/lights/state/:_id')
    .all(middleware.checkAuth)
    .patch(Light.updateLightState)

router.route('/lights/on/:_id')
    .all(middleware.checkAuth)
    .patch(Light.updateLightTimeOn)

router.route('/lights/off/:_id')
    .all(middleware.checkAuth)
    .patch(Light.updateLightTimeOff)
    
module.exports = router