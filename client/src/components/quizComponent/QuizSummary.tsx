export const QuizSummary: React.FC<{
    participant: Participant;
}> = ({ participant }) => {
    return (
        <div>
            <h1>Summary</h1>
            <h4>Participant: {participant.name}</h4>
            <h4>Score: {participant.score}</h4>
        </div>
    );
};
