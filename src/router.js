const express = require('express');
const router = express.Router();

const usercontroller = require('./Controller/userController');

router.post('/register',usercontroller.cadastro);
router.get('/login', usercontroller.login);
router.put('/update/:id', usercontroller.update);
router.delete('/delete/:id', usercontroller.delete);

module.exports = router;