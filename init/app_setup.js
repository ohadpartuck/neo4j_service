var     extend                   = require('util')._extend,
        bodyParser               = require('body-parser');

module.exports = function (app) {

    MAIN_CONFIG          = require('../configuration/main/' + ENV + '.json');
    POSTMAN_CONFIG       = require('../configuration/main/postman')[ENV];

    //to get params in req.body
    app.use(bodyParser());

};

//TODO - add localization

function require_settings(namespace){
    var defaults                = require('../configuration/' + namespace + '/defaults.json'),
        by_env                  = require('../configuration/' + namespace + '/' + ENV + '.json');
    return extend(defaults, by_env);
}