// {
//     name: '',
//     email: '',
//     password: '',
//     img: '',
//     role: '',
//     state: false,  //true is active user
//     google: false  //true is was created with google sign in 
// }

const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is needed']
    },
    email: {
        type: String,
        required: [true, 'email is needed'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is needed']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: [true, 'role is needed'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
})


module.exports = model('User', UserSchema)