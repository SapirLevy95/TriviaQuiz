"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchQuestions = void 0;
var consts_1 = require("../consts");
var fetchQuestions = function (req, res) {
    console.log(consts_1.EXAMPLEQUESTIONS);
    res.status(200).json(consts_1.EXAMPLEQUESTIONS);
};
exports.fetchQuestions = fetchQuestions;
