const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => { 

    const token = req.header('x-token')

    console.log(token)

    try {
        
       const payload =  jwt.verify(token, process.env.SECRETKEY)

        console.log(payload)

        req.uid = payload.uid

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'token not valid'
        })
    }

}


module.exports = {
    validateJWT
}