var express = require('express');
var ItemController = require('../../../controllers/item.controller');

var router = express.Router();

router.get('/', ItemController.getItems);
router.post('/', ItemController.createItem);
router.put('/', ItemController.updateItem);
router.delete('/:id', ItemController.removeItem);

module.exports = router;