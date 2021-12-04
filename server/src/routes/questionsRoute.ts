import express from 'express';
import { EXAMPLEQUESTIONS } from '../consts';
import { Request, Response } from 'express';
import { fetchQuestions } from '../controllers/questionsController';

export const questionsRouter = express.Router();

questionsRouter.get('/', fetchQuestions);
