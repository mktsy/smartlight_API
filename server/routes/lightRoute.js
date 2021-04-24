const router = require('express-promise-router')()
const Light = require('../controllers/lights')

router.route('/lights')
    .get(Light.getAllLights)

router.route('/lights/:_id')
    .get(Light.getLightById)
    .patch(Light.updateLight)

module.exports = router