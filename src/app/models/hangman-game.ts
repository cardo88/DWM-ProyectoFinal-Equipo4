export class Words {
    _id?: number;
    word: string;
    correctAnswer: string;

    constructor(word: string, correctAnswer: string){
        this.word = word;
        this.correctAnswer = correctAnswer;
    }
}

