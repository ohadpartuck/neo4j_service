var queryString     = require('querystring');
var postman         = require('rest_postman')(POSTMAN_CONFIG),
    Cookies         = require('cookies');


//TODO - all these function - extract to a helper node module
isProduction                = function() { return ENV == 'production' };

useStub                     = function(use_stub_setting) { return use_stub_setting && !isProduction() };

GenericOnGetError           = function(params){
    //TODO - catch all errors not here but by emitting an event
    console.log('GenericOnGetError got this ' + params);
};

genericNewObjectCallback    = function(params){
    console.log('genericNewObjectCallback got this ' + JSON.stringify(params));
};

sanitizeObject = function(queryObj, legalProductsKeys){
    var sanitizedObj = {};

    for (var key in queryObj){
        if (legalKey(key, legalProductsKeys)){
            sanitizedObj[key] = queryObj[key];
        }
    }

    return sanitizedObj;
};
legalKey = function (key, legalProductsKeys){
    return legalProductsKeys.hasOwnProperty(key)
};
sanitizedUrlIsOk = function (sanitizedUrl){
    //To prevent get all query in production
    return !(sanitizedUrl == '' && isProduction());
};

sanitizedNewProductParamsIsOk = function(sanitizedNewProductParams, mustFields){
    var paramsLegal = true;
    for (var key in mustFields){
        if (!sanitizedNewProductParams.hasOwnProperty(key)){
            paramsLegal = false
        }
    }
    return paramsLegal;
};