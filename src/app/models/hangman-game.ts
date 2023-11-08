export class Words {
    _id?: number;
    word: string;
    correctWord: string;

    constructor(word: string, correctWord: string){
        this.word = word;
        this.correctWord = correctWord;
    }
}

