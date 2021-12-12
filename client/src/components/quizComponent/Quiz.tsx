import React, { useEffect } from 'react';
import { QuizAnswers } from './QuizAnswers';
import Button from '@mui/material/Button';
import { getQuestions } from '../../services/getDataApiServices';

export const Quiz: React.FC<{
    participant: Participant;
    setParticipant: any;
    setIsFinishedQuiz: any;
}> = ({ participant, setParticipant, setIsFinishedQuiz }) => {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [questionIndex, setQuestionIndex] = React.useState<number>(1);
    const [nextIsUsed, setNextIsUsed] = React.useState<boolean>(false);
    const [question, setQuestion] = React.useState<Question | null>(
        questions?.[0],
    );

    useEffect(() => {
        const setQuestionsData = async () => {
            const questions = await getQuestions();
            setQuestions(questions);
            setQuestion(questions[0]);
        };
        setQuestionsData();
    }, [getQuestions]);

    const onChangeQuestion = (answer: String) => {
        let participantWithNewScore = { ...participant };
        let newQuestionIndex = questionIndex + 1;
        answer === question?.correctAnswer && ++participantWithNewScore.score;
        if (questionIndex === questions.length) {
            setIsFinishedQuiz(true);
            setQuestionIndex(1);
        } else {
            setQuestion(questions[questionIndex]);
            setQuestionIndex(newQuestionIndex);
        }
        setParticipant(participantWithNewScore);
    };

    if (!questions || !question) {
        return <h1>loading...</h1>;
    }
    return (
        <div>
            <Button
                disabled={nextIsUsed}
                onClick={() => {
                    onChangeQuestion('');
                    setNextIsUsed(true);
                }}
            >
                Next
            </Button>
            <div style={{ marginLeft: 4 }}>
                <h4>Participant: {participant.name}</h4>
                <h4>Score: {participant.score}</h4>
            </div>
            <h1> Question number {questionIndex}</h1>
            <h3>{question?.question}</h3>
            <QuizAnswers
                question={question}
                onChangeQuestion={onChangeQuestion}
            ></QuizAnswers>
        </div>
    );
};
