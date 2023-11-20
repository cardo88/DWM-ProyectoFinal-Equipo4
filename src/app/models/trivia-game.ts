export class Questions {
    _id?: number;
    question: string;
    options: string[];
    correctAnswer: string;
    isChecked?: boolean = false;
    votes?: { room: string; voteCounts: { '+1': number; '0': number; '-1': number } }[];  // Array de votos

    constructor(question: string, options: string[], correctAnswer: string){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.votes = [];
    }
}

