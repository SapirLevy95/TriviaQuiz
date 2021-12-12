import { app } from '../app';
import { Request, Response } from 'express';
import { activateConnection } from '../mongoDB/services';

export const fetchQuestions = (req: Request, res: Response) => {
    const dbConnection = async () => {
        const db = await activateConnection();
        const collection = db?.collection('questions');
        const rawQuestions = await collection
            ?.find({}, { projection: { _id: 0, category: 0, type: 0 } })
            .toArray();
        res.status(200).json(rawQuestions);
    };
    dbConnection();
};
