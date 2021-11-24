import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const port = process.env.SERVER_PORT || 5000;

const DOGS = [
    { name: 'Amy', type: 'Chiwawa' },
    { name: 'Lucy', type: 'Pitbull' },
];

const EXAMPLEQUESTIONS = [
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

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.get('/questions', (req: Request, res: Response) => {
    console.log(EXAMPLEQUESTIONS);
    res.status(200).json(EXAMPLEQUESTIONS);
});

app.get('/dogs', (req: Request, res: Response) => {
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
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ oki: 'dok' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

module.exports = app;
