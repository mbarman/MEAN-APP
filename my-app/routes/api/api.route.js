var  express = require('express');
var  router = express.Router();

var itemRoute = require('./item/item.route');
router.use('/items', itemRoute);

module.exports = router;

