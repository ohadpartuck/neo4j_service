var express     = require('express');
var router      = express.Router();


module.exports = function (app, namespace) {
    router.get('/', function(req, res) {
        res.json({'main_sanger': true});
    });

    app.use(namespace + '/v1', router);
};




