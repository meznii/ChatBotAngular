// Imports
var user = require('../models/user');
var type = require('../models/type');
var jwtUtils = require('../utils/jwt.utils');
var asyncLib = require('async');
// Constants
const TITLE_LIMIT   = 2;
const CONTENT_LIMIT = 4;
const ITEMS_LIMIT   = 50;
// Routes
module.exports = {

    createType: async (req, res, next) => {

        // Params
        var lib = req.body.libelle;

        if (lib == null) {
            return res.status(400).json({'error': 'missing parameters'});
        }

        type.create({
            libelle: lib
        }).then(function (newType) {
            console.log(newType);
            return res.status(201).json(newType)

        }).catch(function (err) {
            return res.status(500).json({'error': 'missing params'});
        });
    },
    listTypes: async (req, res, next) =>{
        var fields  = req.query.fields;
        var limit   = parseInt(req.query.limit);
        var offset  = parseInt(req.query.offset);
        var order   = req.query.order;

        if (limit > ITEMS_LIMIT) {
            limit = ITEMS_LIMIT;
        }

        type.find({},null,{
            order: [(order != null) ? order.split(':') : ['libelle', 'ASC']],
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset: (!isNaN(offset)) ? offset : null,
            include: [{
                model: user,
                attributes: [ 'name' ]
            }]
        }).then(function(types) {
            if (types) {
                res.status(200).json(types);
            } else {
                res.status(404).json({ "error": "no messages found" });
            }
        }).catch(function(err) {
            console.log(err);
            res.status(500).json({ "error": "invalid fields" });
        });
    }

}