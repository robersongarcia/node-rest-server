const {Router} = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');
const { uploadFiles } = require('../controllers/uploads');

const router = Router()

router.post('/', uploadFiles)


module.exports = router