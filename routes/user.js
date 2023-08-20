const {Router} = require('express');
const { usersGet, usersPost, usersPut, usersDelete } = require('../controllers/user');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

const router = Router();

router.get('/', usersGet)
router.post('/', [check('email', 'email is not valid').isEmail(), check('name', 'name is required').not().isEmpty(),check('password', 'password is required').isLength({
    min: 6
}), check('role', 'its not a valid role').isIn(['ADMIN_ROLE','USER_ROLE']), validateFields ] ,usersPost)
router.put('/:id', usersPut)
router.delete('/', usersDelete)

module.exports = router;

// you can make custom checks like

// check('role').custom( async (role = '') => {
//     custom validate something
//     if go wrong throw new Error
// })