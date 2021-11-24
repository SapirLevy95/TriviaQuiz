import * as React from "react";
import { TriviaQuiz } from "./TriviaQuiz";
import { ParticipantSubmit } from "./ParticipantSubmit";

export const QuizComponent = () => {
  const [participant, setParticipant] = React.useState<Participant | null>(
    null
  );

  const enterParticipantData = (participantName: String) => {
    // enter the participant to DB
    setParticipant({ name: participantName, score: 0 });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {!participant?.name ? (
        <ParticipantSubmit hendlerParticipantName={enterParticipantData} />
      ) : (
        <TriviaQuiz participant={participant} setParticipant={setParticipant} />
      )}
    </div>
  );
};
