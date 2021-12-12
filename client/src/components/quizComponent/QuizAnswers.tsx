import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const QuizAnswers: React.FC<{
    question: Question;
    onChangeQuestion: (answer: String) => void;
}> = ({ question, onChangeQuestion }) => {
    const randomAnswers: String[] = [
        ...question.incorrectAnswers,
        question.correctAnswer,
    ];
    const onChangeQuestionHendler = async (answer: String) => {
        onChangeQuestion(answer);
    };

    return (
        <div>
            <Stack spacing={10} direction="row" style={{ marginTop: 50 }}>
                <Button
                    variant="contained"
                    onClick={() => onChangeQuestionHendler(randomAnswers[0])}
                >
                    {randomAnswers[0]}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => onChangeQuestionHendler(randomAnswers[1])}
                >
                    {randomAnswers[2]}
                </Button>
            </Stack>
            <Stack spacing={10} direction="row" style={{ marginTop: 20 }}>
                <Button
                    variant="contained"
                    onClick={() => onChangeQuestionHendler(randomAnswers[2])}
                >
                    {randomAnswers[2]}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => onChangeQuestionHendler(randomAnswers[3])}
                >
                    {randomAnswers[3]}
                </Button>
            </Stack>
        </div>
    );
};
