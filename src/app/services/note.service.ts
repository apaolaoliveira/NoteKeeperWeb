import { Observable } from "rxjs";
import { Note } from "../models/note";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root' // app module
})
export class NoteService{

    private NOTES_API_URL = `${environment.API_URL}/notes`;
    private CATEGORIES_API_URL = `${environment.API_URL}/categories`;

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

    GetUnarchiveNotes(): Observable<Note[]>{
        const url = `${this.NOTES_API_URL}?archive=false`;

        return this.http.get<Note[]>(url);
    }

    SelectArchiveNotes(): Observable<Note[]>{
        const url = `${this.NOTES_API_URL}?archive=true`;

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