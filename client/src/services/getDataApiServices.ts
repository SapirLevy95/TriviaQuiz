//instead of eny, Questions[] should be- but it tsn't working.
export const getQuestions = async () => {
    const questionsResponce = await fetch(`http://localhost:5000/questions`);
    const questions: any = await questionsResponce.json();
    return questions;
};
