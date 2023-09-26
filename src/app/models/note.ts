import { Category } from "./category";

export class Note {
    id?: number;
    title: string;
    content: string;
    theme: Theme;

    categoryId: number;
    category?: Category;

    archive: boolean;

    constructor(
        title: string,
        content: string,
        theme: Theme,
        categoryId: number,
        id?: number
    ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.theme = theme;
        this.categoryId = categoryId;
        this.archive = false;
    }
}

type Theme = 'info' | 'warning' | 'danger' | 'dark';