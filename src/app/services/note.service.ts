import { Injectable } from "@angular/core";
import { Note } from "../models/note";

@Injectable({
    providedIn: 'root' // app module
})
export class noteService{
    notes: Note[] = [
        {
            id: 0,
            title: 'Lavar o cachorro ',
            content: 'Pegar a toalha > Pegar o Shampoo',
            theme: 'dark',
            categoryId: 1,
            filed: false
        },
        {
            id: 1,
            title: 'Fazer tarefa',
            content: 'Pegar a folha > Pegar o lápis',
            theme: 'danger',
            categoryId: 1,
            filed: false
        },
        {
            id: 2,
            title: 'Estender a roupa',
            content: 'Pegar as roupas > levar no quintal',
            theme: 'warning',
            categoryId: 1,
            filed: false
        }
    ];

    Add(note: Note) {
        note.id = this.notes.length;
        this.notes.push(note);
        return;
    }

    Edit(note: Note){
        const noteIndex = this.notes.findIndex((n) => n.id == note.id);
        this.notes[noteIndex] = note;
        return;
    }

    Delete(note: Note) {
        const noteIndex = this.notes.findIndex((n) => n.id == note.id);
        this.notes.splice(noteIndex, 1); // (start point, delete count)
        return;
    }

    GetNoteById(id: number): Note | undefined {
        return this.notes.find((note) => note.id == id);
    }

    GetAll(): Note[]{
        return this.notes;
    }
}