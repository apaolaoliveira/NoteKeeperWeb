import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root' // app module
})
export class NoteService{

    private NOTES_API_URL = `http://localhost:3000/notes`;
    private CATEGORIES_API_URL = `http://localhost:3000/categories`;

    constructor(
        private http: HttpClient
    ){}

    Add(note: Note): Observable<Note>{
        return this.http.post<Note>(this.NOTES_API_URL, note);
    }

    Edit(note: Note): Observable<Note>{
        const url = `${this.NOTES_API_URL}/${note.id}`;

        return this.http.put<Note>(url, note);
    }

    Delete(note: Note): Observable<any> {
        const url = `${this.NOTES_API_URL}/${note.id}`;

        return this.http.delete<Note>(url);
    }

    GetNoteById(id: number): Observable<Note>{
        const url = `${this.NOTES_API_URL}/${id}`;

        return this.http.get<Note>(url);
    }

    GetAll(): Observable<Note[]>{
        return this.http.get<Note[]>(this.NOTES_API_URL);
    }

    SelectArchiveNotes(): Observable<Note[]>{
        const url = `${this.CATEGORIES_API_URL}?archive=true`;

        return this.http.get<Note[]>(url);
    }

    SelectNotesByCategory(category: Category): Observable<Note[]>{
        const url = `${this.CATEGORIES_API_URL}/${category.id}/notes?archive=false`;

        return this.http.get<Note[]>(url);
    }

    SelectArchiveNotesByCategory(category: Category): Observable<Note[]>{
        const url = `${this.CATEGORIES_API_URL}/${category.id}/notes?archive=true`;

        return this.http.get<Note[]>(url);
    }
}