"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = process.env.SERVER_PORT || 5000;
var DOGS = [
    { name: 'Amy', type: 'Chiwawa' },
    { name: 'Lucy', type: 'Pitbull' },
];
var EXAMPLEQUESTIONS = [
    {
        question: 'who barks?',
        answers: {
            answer1: { answer: 'dog' },
            answer2: { answer: 'cat' },
            answer3: { answer: 'mouse' },
            answer4: { answer: 'lizard' },
        },
        rightAnswer: 'dog',
    },
    {
        question: 'who likes to scratch?',
        answers: {
            answer1: { answer: 'dog' },
            answer2: { answer: 'cat' },
            answer3: { answer: 'mouse' },
            answer4: { answer: 'lizard' },
        },
        rightAnswer: 'cat',
    },
];
app.get('/questions', function (req, res) {
    console.log(EXAMPLEQUESTIONS);
    res.status(200).json(EXAMPLEQUESTIONS);
});
app.get('/dogs', function (req, res) {
    // console.log(req.query.type);
    // let dogs = DOGS;
    // if (req.query.type) {
    //     if (typeof req.query.type !== 'string') {
    //         res.status(400).json('wrong query param, type must be string');
    //         return;
    //     }
    //     const type: string = req.query.type;
    //     dogs = dogs.filter(
    //         (dog) => dog.type.toLowerCase() === type.toLowerCase(),
    //     );
    // }
    // res.status(200).json(dogs);
    res.status(200).json(DOGS);
});
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
}
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/health', function (req, res) {
    res.status(200).json({ oki: 'dok' });
});
app.listen(port, function () {
    console.log("App running on port ".concat(port, "."));
});
module.exports = app;
