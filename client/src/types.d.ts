interface Participant {
    name: String;
    score: number;
}

interface Question {
    difficulty: String;
    question: String;
    correctAnswer: String;
    incorrectAnswers: String[];
    // correct_answer: String;
    // incorrect_answers: String[];
}

// interface Answer {
//     answer: String;
// }

interface Answers {
    answer1: String;
    answer2: String;
    answer3: String;
    answer4: String;
}
