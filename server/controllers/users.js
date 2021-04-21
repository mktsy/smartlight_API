const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')

dotenv.config()
const salt = parseInt(process.env.SALT)
const key = process.env.KEY

module.exports = {
    getAllUsers: async (req, res) => {
        const result = await User.find({})
        res.status(200).send(result)
    },
    getUserById: async (req, res) => {
        const { _id } = req.params
        const result = await User.findById(_id)
        res.status(200).send(result)
    },
    createUser: async (req, res) => {
        console.log(req.body);
        // const roles = ['User', 'Admin']
        // var role = ''
        // var bool = true 
        // for(i in roles){
        //     if(i != 0) role += ' or '
        //     role += roles[i]
        //     if(req.body.role == roles[i]){
        //         bool = !bool
        //     }
        // }
        // if(bool) return res.status(400).json({message: `Role must be ${role}`})

        // if(req.body.role != 'User' || req.body.role != 'Admin') {
        //     return res.status(400).json({message: 'Role must be user or admin'})
        // }
        // req.body.role == 'User' || 'Admin'?console.log(''): return res.status(201).json({message: 'Role must be user or admin'})
        const user = req.body
        bcryptjs.hash(req.body.password, salt, (err, hash) => {
            // const password = {password: hash}
            // const a = Object.assign(user, password)
            // console.log("0", a);
            // console.log({...user, password: hash});
            User.create({ ...user, password: hash }, (err, result) => {
                if (err) {
                    return res.status(409).json({ err })
                }
                res.status(201).json(result)
            })
        })
    },
    userLogin: async (req, res) => {
        console.log(req.body);
        const user = await User.find({ email: req.body.email })
        // console.log(user.length);
        if (user.length == 1) {
            const result = await bcryptjs.compare(req.body.password, user[0].password)
            if (result) {
                const token = jwt.sign({email: user[0].email, role: user[0].role}, key, {expiresIn: '31d'}) // or objectId 
                return res.status(201).json({token: token})
            }
            res.status(401).json({ message: 'Wrong password' })
        } else {
            res.status(401).json({ message: 'Wrong email' })
        }
        // if (user.length == 1) {
        //     bcryptjs.compare(req.body.password, user[0].password, (err, result) => {
        //         if (result) return res.status(200).json(user)
        //         res.status(401).json({ message: 'Wrong email or password' })

        //     })
        // } else {
        //     res.status(401).json({ message: 'Wrong email or password' })
        // }
    },
    checkRole: async (req, res) => {
        const { token } = req.body
        const authorizedData = jwt.verify(token, key)
        res.status(200).json(authorizedData)
    }
}