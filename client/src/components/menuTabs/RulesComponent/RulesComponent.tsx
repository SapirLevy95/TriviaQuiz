import * as React from 'react';

export const RulesComponent = () => {
    const [rulesInfo, setRulesInfo] = React.useState<String>(
        `Welcome to my TRIVIA QUIZ! \n
        The rules are very simple. Easy questions gives 5 points, questions of medium difficulty gives you 10 points and hard questions gives you 15 points.\n
        You can be wrong for only 3 times, and you can skip only one question.`,
    );

    return <h3>{rulesInfo}</h3>;
};
