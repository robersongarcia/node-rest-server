const {response, request} = require('express')

const usersGet = (req = request, res = response) => {
    
    const {q, name, apikey,page,limit} = req.query

    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    })
}

const usersPost = (req = request, res = response) => {

    const {name,age} = req.body

    res.json({
        msg: 'post API - controller',
        name, age
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
