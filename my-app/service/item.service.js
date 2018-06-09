var Item = require('../models/item.model');

exports.getAllItems = async function (query, page, limit) {
  var options = {
    page,
    limit
  }

  try {
    var items = await Item.paginate(query, options);
    return items;
  }
  catch (err) {
    throw Error(err);
  }
}

exports.createItem = async function (item) {

  // Creating a new Mongoose Object by using the new keyword
  var newItem = new Item({
    name: item.name,
    type: item.type,
    description: item.description,
    dateAdded: new Date()
  })

  try {

    // Saving the Todo 
    var savedItem = await newItem.save()

    return savedItem;
  } catch (err) {

    // return a Error message describing the reason     
    throw Error(err)
  }
}

exports.updateItem = async function (item) {
  var id = item.id

  try {
    //Find the old Todo Object by the Id

    var oldItem = await Item.findById(id);
  } catch (e) {
    throw Error(e);
  }

  // If no old Todo Object exists return false
  if (!oldTodo) {
    return false;
  }

  oldItem.name = item.name
  oldItem.description = item.description
  oldItem.type = item.type


  try {
    var savedItem = await oldItem.save();
    return savedItem;
  } catch (e) {
    throw Error(e);
  }
}

exports.deleteItem = async function (id) {

  // Delete the Todo
  try {
    var deleted = await Item.remove({ _id: id })
    if (deleted.result.n === 0) {
      throw Error("Item Could not be deleted")
    }
    return deleted
  } catch (e) {
    throw Error(e)
  }
}


