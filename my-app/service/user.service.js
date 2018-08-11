var userModel = require('./../models/user.model');

module.exports = {
    registerMeService: async function(user) {

        var newUser = new userModel({
            name: user.name,
            email: user.email,
            category: user.category,
            userId: user.userId,
            password: user.password,
            dateAdded: user.dateAdded
        });

        try {
            var savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            throw Error(error);
        }
    },
    logInService: async function(user) {
        try {
            var loginuser = await userModel.findOne({ 'userId': user.userId }, 'password', function(err, docs) {
                return docs;
            })
            return loginuser;
        } catch (err) {
            throw Error(error);
        }

    }
}