var userModel = require('./../models/user.model');

module.exports = {
    registerMeService: async function (user){

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
    logInService: async function(user){
        try{
         var  tempUser = '';
         userModel.find({'userId': user.userId},function(err,docs){
            tempUser = docs ;
            return tempUser ;
        })
        }
        catch(err){
            throw Error(error);
        }
       
    }
}