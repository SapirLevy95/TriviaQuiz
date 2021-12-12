import express, { Express, Request, Response } from 'express';
import { questionsRouter } from './routes/questionsRouter';
import { accessControlAllowOriginMiddleware } from './middlewares/accessControlAllowOrigin';
import { activateConnection } from './mongoDB/services';

// https://medium.com/codechef-vit/a-better-project-structure-with-express-and-node-js-c23abc2d736f
// https://github.com/jugaldb/Node.Js-sample-project-structure

// const dbConnection = activateConnection();

export const app: Express = express();
const port = process.env.SERVER_PORT || 5000;

app.use(accessControlAllowOriginMiddleware);

app.use('/questions', questionsRouter);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
