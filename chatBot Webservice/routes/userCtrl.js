var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models/user');


var asyncLib = require('async');
var bodyParser = require("body-parser");
//****************************************************************
// Constants
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
//Routes
module.exports = {

    login: async (req, res, next) => {
        // Params
        var email = req.body.email;
        var password = req.body.password;
        if (email == null || password == null) {
            return res.status(400).json({'error': 'missing parameters'});
        }

        asyncLib.waterfall([
            function (done) {
                models.findOne(
                    {
                        email: email
                    }
                )
                    .then(function (userFound) {

                        done(null, userFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({'error': 'unable to verify user'});
                    });
            },
            function (userFound, done) {
                if (userFound) {
                    bcrypt.compare(password, userFound.password, function (errBycrypt, resBycrypt) {
                        done(null, userFound, resBycrypt);
                    });
                } else {
                    return res.status(404).json({'error': 'user not exist in DB'});
                }
            },
            function (userFound, resBycrypt, done) {
                if (resBycrypt) {
                    done(userFound);
                } else {
                    return res.status(403).json({'error': 'invalid password'});
                }
            }
        ], function (userFound) {
            if (userFound) {
                return res.status(201).json({
                    'userId': userFound.id,
                    'username': userFound.name + ' ' + userFound.firstname,
                    'token': jwtUtils.generateTokenForUser(userFound)
                });
            } else {
                return res.status(500).json({'error': 'cannot log on user'});
            }
        });
    },
    register: async (req, res, next) => {
        //params
        // Params
        var email = req.body.email;
        var username = req.body.name;
        var password = req.body.password;
        var firstname = req.body.firstname;

        if (email == null || username == null || password == null) {
            return res.status(400).json({'error': 'missing parameters'});
        }
        if (username.length <= 4) {
            return res.status(400).json({'error': 'wrong username '});
        }
        if (!EMAIL_REGEX.test(email)) {
            return res.status(400).json({'error': 'email is not valid'});
        }

        asyncLib.waterfall([
                function (done) {
                    models.findOne(
                        {email: email}
                    )
                        .then(function (userFound) {
                            done(null, userFound);
                        })
                        .catch(function (err) {
                            return res.status(500).json({'error': 'unable to verify user'});
                        });
                },
                function (userFound, done) {
                    if (!userFound) {
                        bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                            done(null, userFound, bcryptedPassword);
                        });
                    } else {
                        return res.status(409).json({'error': 'user already exist'});
                    }
                },
                function (userFound, bcryptedPassword, done) {
                    var newUser = models.create({
                        email: email,
                        name: username,
                        password: bcryptedPassword,
                        firstname: firstname
                    })
                        .then(function (newUser) {
                            done(null, newUser);
                        })
                        .catch(function (err) {
                            return res.status(500).json({'error': 'cannot add user'});
                        });
                }
                ,
                function (newUser) {
                    if (newUser) {
                        return res.status(201).json({
                            newUser
                        });

                    } else {
                        res.status(404).json({'error': 'cannot registre user'});
                    }
                }
            ]
        );
    },
    getUserProfile: async (req, res, next) => {
        // Getting auth header
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        if (userId < 0)
            return res.status(400).json({'error': 'wrong token'});
        // console.log(userId)
        models.findOne(
            {_id: userId}
        ).then(function (user) {
            if (user) {
                res.status(201).json(user);
            } else {
                res.status(404).json({'error': 'user not found'});
            }
        }).catch(function (err) {
            res.status(500).json({'error': 'cannot fetch user'});
        });
    },
    updateUserProfile: async (req, res, next) => {
        // Getting auth header
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        // Params
        var email = req.body.email;
        var username = req.body.name;
        var password = req.body.password;
        var firstname = req.body.firstname;


        asyncLib.waterfall([
            function (done) {
                models.findOne(
                    {_id: userId}
                ).then(function (userFound) {
                    done(null, userFound);
                })
                    .catch(function (err) {
                        return res.status(500).json({'error': 'unable to verify user'});
                    });
            },
            function (userFound, done) {
                if (userFound) {
                    userFound.update({
                        name: (username ? username : userFound.username),
                        firstname: (firstname ? firstname : userFound.firstname),
                        email: (email ? email : userFound.email),
                        password: (password ? password : userFound.password)

                    }).then(function () {
                        done(userFound);
                    }).catch(function (err) {
                        res.status(500).json({'error': 'cannot update user'});
                    });
                } else {
                    res.status(404).json({'error': 'user not found'});
                }
            },
        ], function (userFound) {
            if (userFound) {
                return res.status(201).json(userFound);
            } else {
                return res.status(500).json({'error': 'cannot update user profile'});
            }
        });
    }
}
