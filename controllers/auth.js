const { generateJWT } = require('../helpers/generateJWT')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const login = async (req, res) => {

    const {email, password} = req.body

    try {
     
        const user = await User.findOne({
            email
        })

        if(!user){
            return res.status(400).json({
                msg: 'user or password are not corrects'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password)

        if( !validPassword ){
            return res.status(400).json({
                msg: 'user or password are not corrects'
            })
        }

        const token = await generateJWT(user.id)
 
        res.json({
            msg: 'login ok',
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'something went wrong'
        })
    }
    
}

module.exports = {
    login
}