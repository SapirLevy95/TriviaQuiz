import React from 'react';
import { QuizAnswers } from './QuizAnswers';

const questions: Question[] = [
    {
        question: 'who barks?',
        answers: {
            answer1: 'dog',
            answer2: 'cat',
            answer3: 'mouse',
            answer4: 'lizard',
        },
        rightAnswer: 'dog',
    },
    {
        question: 'who likes to scratch?',
        answers: {
            answer1: 'dog',
            answer2: 'cat',
            answer3: 'mouse',
            answer4: 'lizard',
        },
        rightAnswer: 'cat',
    },
];

export const Quiz: React.FC<{
    participant: Participant;
    setParticipant: any;
    setIsFinishedQuiz: any;
}> = ({ participant, setParticipant, setIsFinishedQuiz }) => {
    const [questionIndex, setQuestionIndex] = React.useState<number>(1);
    const [question, setQuestion] = React.useState<Question>(questions[0]);

    const onChangeQuestion = (answer: String) => {
        let participantWithNewScore = { ...participant };
        let newQuestionIndex = questionIndex + 1;
        answer === question.rightAnswer && ++participantWithNewScore.score;
        if (questionIndex === questions.length) {
            setIsFinishedQuiz(true);
            setQuestionIndex(1);
        } else {
            setQuestion(questions[questionIndex]);
            setQuestionIndex(newQuestionIndex);
        }
        setParticipant(participantWithNewScore);
    };

    return (
        <div>
            <div style={{ marginLeft: 4 }}>
                <h4>Participant: {participant.name}</h4>
                <h4>Score: {participant.score}</h4>
            </div>
            <h1> Question number {questionIndex}</h1>
            <h3>{question.question}</h3>
            <QuizAnswers
                question={question}
                onChangeQuestion={onChangeQuestion}
            ></QuizAnswers>
        </div>
    );
};
