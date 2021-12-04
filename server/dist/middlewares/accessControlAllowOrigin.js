"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessControlAllowOriginMiddleware = void 0;
var accessControlAllowOriginMiddleware = function (req, res, next) {
    console.log('middleware');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
};
exports.accessControlAllowOriginMiddleware = accessControlAllowOriginMiddleware;
