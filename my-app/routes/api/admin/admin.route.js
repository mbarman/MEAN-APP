var express = require('express');
var userController = require('./../../../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.registerMe);


module.exports = router;