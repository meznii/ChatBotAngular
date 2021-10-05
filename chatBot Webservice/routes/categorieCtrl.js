// Imports
var type = require('../models/type');
var categorie = require('../models/categorie')
var jwtUtils = require('../utils/jwt.utils');
var asyncLib = require('async');
var user = require('../models/user');

// Routes
module.exports = {

    createCategorie: async (req, res, next) => {
        // Getting auth header
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        // Params

        var lib = req.body.libelle;
        var desc = req.body.description;
        var reponse = req.body.reponse;
        var typeId = req.body.typeId;

        if ((lib == null) || (desc == null) || (reponse == null)) {
            return res.status(400).json({'error': 'missing parameters'});
        }
        if ((lib == '') || (desc == '') || (reponse == '')) {
            return res.status(400).json({'error': 'missing parameters'});
        }

        asyncLib.waterfall([
                function (done) {
                    user.findOne(
                        {_id: userId})
                        .then(function (userFound) {
                            done(null, userFound);
                            console.log("hello word");
                            console.log(userFound.id);
                        })
                        .catch(function (err) {
                            return res.status(500).json({'error': 'unable to verify user'});
                        });
                }, function (userFound, done) {
                    type.findOne(
                        {_id: typeId})
                        .then(function (typeFound) {
                            done(null, typeFound, userFound);
                            console.log(typeFound.id);
                        })
                        .catch(function (err) {
                            return res.status(500).json({'error': 'unable to verify type'});
                        });
                },
                function (typeFound, userFound, done) {
                    console.log(' je suis en fin de function', userFound);
                    if (typeFound) {
                        categorie.create({
                            libelle: lib,
                            description: desc,
                            reponse: reponse,
                            typeId: typeId,
                            username: userFound.firstname+ ' '+userFound.name
                        })
                            .then(function (newCategorie) {
                                // console.log(newCategorie);
                                return res.status(201).json(newCategorie)
                                done(null, newCategorie);
                            })
                            .catch(function (err) {
                                return res.status(500).json({'error': 'unable to verify type'});
                            });
                    } else {
                        res.status(404).json({'error': 'type not found'});
                    }
                }
            ]
        );


    },

}