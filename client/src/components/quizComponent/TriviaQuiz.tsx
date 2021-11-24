import * as React from 'react';
import { QuizSummary } from './QuizSummary';
import { Quiz } from './Quiz';
import { StyledTriviaQuiz } from './TriviaQuizStyles';

export const TriviaQuiz: React.FC<{
    participant: Participant;
    setParticipant: any;
}> = ({ participant, setParticipant }) => {
    const [isFinishedQuiz, setIsFinishedQuiz] = React.useState<Boolean>(false);
    console.log(participant);
    return (
        <StyledTriviaQuiz>
            {!isFinishedQuiz ? (
                <Quiz
                    participant={participant}
                    setParticipant={setParticipant}
                    setIsFinishedQuiz={setIsFinishedQuiz}
                ></Quiz>
            ) : (
                <QuizSummary participant={participant}></QuizSummary>
            )}
        </StyledTriviaQuiz>
    );
};
