export class Category {
    id?: number;
    title: string;

    constructor(title: string, id?: number){
        this.id = id;
        this.title = title;
    }
}