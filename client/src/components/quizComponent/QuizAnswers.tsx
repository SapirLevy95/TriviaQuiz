import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const QuizAnswers: React.FC<{
    question: Question;
    onChangeQuestion: (answer: String) => void;
}> = ({ question, onChangeQuestion }) => {
    const onChangeQuestionHendler = async (answer: String) => {
        const response = await fetch(`http://localhost:5000/questions`);
        const questions = await response.json();
        console.log('questions', questions);

        onChangeQuestion(answer);
    };
    return (
        <div>
            <Stack spacing={10} direction="row" style={{ marginTop: 50 }}>
                <Button
                    variant="contained"
                    onClick={() =>
                        onChangeQuestionHendler(question?.answers.answer1)
                    }
                >
                    {question?.answers.answer1}
                </Button>
                <Button
                    variant="contained"
                    onClick={() =>
                        onChangeQuestionHendler(question?.answers.answer2)
                    }
                >
                    {question?.answers.answer2}{' '}
                </Button>
            </Stack>
            <Stack spacing={10} direction="row" style={{ marginTop: 20 }}>
                <Button
                    variant="contained"
                    onClick={() =>
                        onChangeQuestionHendler(question?.answers.answer3)
                    }
                >
                    {question?.answers.answer3}
                </Button>
                <Button
                    variant="contained"
                    onClick={() =>
                        onChangeQuestionHendler(question?.answers.answer4)
                    }
                >
                    {question?.answers.answer4}
                </Button>
            </Stack>
        </div>
    );
};
