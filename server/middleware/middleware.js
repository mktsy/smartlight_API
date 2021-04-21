const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config()
const key = process.env.KEY

module.exports = {
    checkAuth: (req, res, next) => {
        const { authorization } = req.headers // header = req.header
        if (authorization === undefined) return res.status(401).send({ message: 'Token not found' })
        var token = authorization.split(' ')
        token = token[1]
        const authorizedData = jwt.verify(token, key)
        req.decode = authorizedData
        next()
    },
    checkAdmin: (req, res, next) => {
        const { role } = req.decode
        if(role != 'Admin') return res.status(401).send({ message: 'Role must be Admin' })
        next()
    }
}

