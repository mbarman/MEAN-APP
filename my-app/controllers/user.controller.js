var userService = require('./../service/user.service');

module.exports = {

    registerMe: async function(req, res, next) {
        var user = {
            name: req.body.name,
            email: req.body.email,
            category: req.body.category,
            userId: req.body.userId,
            password: req.body.password,
            dateAdded: new Date()
        }
        try {
            var registeredUser = await userService.registerMeService(user);
            res.status(201).json({
                status: 201,
                message: 'User resgistered successfully',
                rUser: registeredUser
            });
        } catch (err) {
            res.status(400).json({
                status: 400,
                message: 'Error in user registration',
                reason: err
            });
        }


    }
}