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
                message: 'User registered successfully',
                rUser: registeredUser
            });
        } catch (err) {
            res.status(400).json({
                status: 400,
                message: 'Error in user registration',
                reason: err
            });
        }
    },

    signMeUp: async function(req, res, next) {
        var user = {
            userId: req.body.userId,
            password: req.body.password,
        }
        try {
            var loggedInUser = await userService.logInService(user);
            if (loggedInUser !== null && loggedInUser !== undefined) {
                if (loggedInUser.password === user.password) {
                    res.status(201).json({
                        status: 201,
                        message: 'Logged in successfully!',
                        user: loggedInUser
                    })
                } else {
                    res.status(201).json({
                        status: 401,
                        message: 'Wrong Userid or Password',
                        user: loggedInUser
                    })
                }
            } else {
                res.status(201).json({
                    status: 401,
                    message: 'User does not exist !',
                })
            }

        } catch (err) {
            res.status(400).json({
                status: 400,
                message: 'Error Logging in',
                reason: err
            });
        }
    }
}