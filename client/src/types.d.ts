interface Participant {
    name: String;
    score: number;
}

interface Question {
    question: String;
    answers: Answers;
    rightAnswer: String;
}

interface Answers {
    answer1: String;
    answer2: String;
    answer3: String;
    answer4: String;
}
