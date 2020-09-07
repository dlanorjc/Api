const express = require('express');
const router = express.Router();

const usercontroller = require('./Controller/userController');

router.post('/register',usercontroller.cadastro);
router.get('/login', usercontroller.login);

module.exports = router;