var express = require('express');
var type = require('./routes/typeCtrl');
var categorie = require('./routes/categorieCtrl');
var userCtrl = require('./routes/userCtrl');

//Routes
exports.router= (function(){
    var apiRouter = express.Router();

    // type routes
    apiRouter.route('/type/add').post(type.createType);
    apiRouter.route('/type/listTypes').get(type.listTypes);

    // categorie routes
    apiRouter.route('/categorie/add').post(categorie.createCategorie);

    //Users routes

    apiRouter.route('/users/registre/').post(userCtrl.register);
    apiRouter.route('/users/login/').post(userCtrl.login);
    // apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
    // apiRouter.route('/users/me/').put(usersCtrl.updateUserProfile);




    return apiRouter;

})();