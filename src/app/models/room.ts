export class Room {
    _id?: number;
    codeNumber: string;
    propousalId: string;

    constructor(codeNumber: string, propousalId: string){
        this.codeNumber = codeNumber;
        this.propousalId = propousalId;
    }
}

