var express = require('express');
var router = express.Router();

var itemRoute = require('./item/item.route');
router.use('/items', itemRoute);

var adminRoute = require('./admin/admin.route');
router.use('/admin', adminRoute);



module.exports = router;