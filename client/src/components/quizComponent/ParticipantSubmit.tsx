import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export const ParticipantSubmit: React.FC<{
    hendlerParticipantName: (participantName: String) => void;
}> = ({ hendlerParticipantName }) => {
    const [participantName, setParticipantName] = React.useState<String>('');

    const hendletParticipantNameChange = (event: any) => {
        setParticipantName(event.target.value);
    };

    const hendlerParticipantNameSubmit = async () => {
        hendlerParticipantName(participantName);
    };

    return (
        <Stack direction="row" spacing={2}>
            <TextField
                required
                id="outlined-required"
                label="Enter your name"
                onChange={hendletParticipantNameChange}
            />
            <Button variant="outlined" onClick={hendlerParticipantNameSubmit}>
                Start the game
            </Button>
        </Stack>
    );
};
