var ItemService = require('../service/item.service');


exports.getItems = async function (req, res, next) {

  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 10;

  try {
    var items = await ItemService.getAllItems({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: items,
      message: "Item received Successfully"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
}

exports.createItem = async function (req, res, next) {
  var item = {
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    dateAdded: req.body.dateAdded
  }

  try {
    var createdItem = await ItemService.createItem(item);
    return res.status(201).json(
      {
        status: 201,
        data: createdItem,
        message: "Item Successfully Created"
      });
  } catch (e) {
    return res.status(400).json(
      {
        status: 400,
        message: "Error creating Item"
      });
  }
}


exports.updateItem = async function (req, res, next) {

  // Id is necessary for the update
  if (!req.body._id) {
    return res.status(400).json({ status: 400, message: "Id must be present" })
  }

  var item = {
    id: req.body._id,
    name: (req.body.name ? req.body.name : null),
    description: (req.body.description ? req.body.description : null),
    type: (req.body.type ? req.body.status : null),
    dateAdded: (req.body.dateAdded ? req.body.dateAdded : null)
  };

  try {
    var updatedItem = await ItemService.updateItem(item);
    return res.status(200).json(
      {
        status: 200, data: updatedItem,
        message: "Item Successfully Updated"
      });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.removeItem = async function (req, res, next) {

  var id = req.params.id;
  try {
    var deleted = await ItemService.deleteItem(id);
    return res.status(200).json({ status: 200, message: "Successfully Deleted"});
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }

}
