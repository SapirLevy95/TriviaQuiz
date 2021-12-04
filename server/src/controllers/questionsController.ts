import { app } from '../app';
import { EXAMPLEQUESTIONS } from '../consts';
import { Request, Response } from 'express';

export const fetchQuestions = (req: Request, res: Response) => {
    console.log(EXAMPLEQUESTIONS);
    res.status(200).json(EXAMPLEQUESTIONS);
};
