const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const usersGet = (req = request, res = response) => {

    const { q, name, apikey, page, limit } = req.query

    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    })
}

const usersPost = async (req = request, res = response) => {

    const { name, email, password, role } = req.body

    const emailExist = await User.findOne({
        email
    })

    if(emailExist){
        return res.status(400).json({
            msg: 'the email already exist in the db'
        })
    }

    const user = new User({ name, email, password:'', role })
    
    const salt = bcryptjs.genSaltSync(10)

    user.password = bcryptjs.hashSync(password, salt)

    user.save()

    res.json({
        msg: 'post API - controller',
        user
    })
}

const usersPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        msg: 'put API - controller',
        id
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}


module.exports = {
    usersGet,
    usersDelete,
    usersPost,
    usersPut
}
