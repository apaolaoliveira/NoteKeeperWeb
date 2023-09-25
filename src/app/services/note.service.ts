import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root' // app module
})
export class noteService{

    private API_URL = 'http://localhost:3000/notes';

    constructor(
        private http: HttpClient
    ){}

    Add(note: Note): Observable<Note>{
        return this.http.post<Note>(this.API_URL, note);
    }

    Edit(note: Note): Observable<Note>{
        const url = `${this.API_URL}/${note.id}`;

        return this.http.put<Note>(url, note);
    }

    Delete(note: Note): Observable<any> {
        const url = `${this.API_URL}/${note.id}`;

        return this.http.delete<Note>(url);
    }

    GetNoteById(id: number): Observable<Note>{
        const url = `${this.API_URL}/${id}`;

        return this.http.get<Note>(url);
    }

    GetAll(): Observable<Note[]>{
        return this.http.get<Note[]>(this.API_URL);
    }
}