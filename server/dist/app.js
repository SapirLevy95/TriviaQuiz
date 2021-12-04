"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var questionsRoute_1 = require("./routes/questionsRoute");
var accessControlAllowOrigin_1 = require("./middlewares/accessControlAllowOrigin");
// https://medium.com/codechef-vit/a-better-project-structure-with-express-and-node-js-c23abc2d736f
// https://github.com/jugaldb/Node.Js-sample-project-structure
exports.app = (0, express_1.default)();
var port = process.env.SERVER_PORT || 5000;
exports.app.use(accessControlAllowOrigin_1.accessControlAllowOriginMiddleware);
exports.app.use('/questions', questionsRoute_1.questionsRouter);
exports.app.listen(port, function () {
    console.log("App running on port ".concat(port, "."));
});
