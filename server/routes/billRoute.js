const router = require('express-promise-router')()
const Bill = require('../controllers/bill')
const middleware = require('../middleware/middleware')

router.route('/bills')
    .all(middleware.checkAuth)
    .get(Bill.getBills)
    .post(Bill.createBill)

router.route('/lastbill')
    .all(middleware.checkAuth)
    .get(Bill.getLastBill)

router.route('/bill/:_id')
    .all(middleware.checkAuth)
    .patch(Bill.updateBill)

module.exports = router