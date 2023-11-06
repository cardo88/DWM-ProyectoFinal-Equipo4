export class Proposal {
    _id?: number;
    name: string;
    activities: string[];

    constructor(name: string, activities: string[]){
        this.name = name;
        this.activities = activities;
    }
}