const router = require('express-promise-router')()
const User = require('../controllers/users')
const middleware = require('../middleware/middleware')

router.route('/users')
    .all(middleware.checkAuth)
    .all(middleware.checkAdmin)
    .get(User.getAllUsers)
    .post(User.createUser)
    

router.route('/users/:_id')
    .all(middleware.checkAuth)
    .get(User.getUserById)
    .patch(User.updateUser)

router.route('/user/login')
    .post(User.userLogin)

router.route('/user/checkrole')
    .post(User.checkRole)

router.route('/changepassword')
    .post(User.changePassword)

router.route('/users/:_id')
    .all(middleware.checkAuth)
    .all(middleware.checkAdmin)
    .delete(User.deleteUser)

module.exports = router