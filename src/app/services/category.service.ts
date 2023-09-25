import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private API_URL = 'http://localhost:3000/categories'

    constructor(
        private http: HttpClient
    ){ }

    Add(category: Category): Observable<Category>{
        return this.http.post<Category>(this.API_URL, category);
    }

    Edit(category: Category): Observable<Category>{
        const url = `${this.API_URL}/${category.id}`;
        
        return this.http.put<Category>(url, category);
    }

    Delete(category: Category): Observable<any> {
        const url = `${this.API_URL}/${category.id}`;

        return this.http.delete<Category>(url);
    }

    GetCategoryById(id: number): Observable<Category>{
        const url = `${this.API_URL}/${id}`;

        return this.http.get<Category>(url);
    }

    GetAll(): Observable<Category[]>{
        return this.http.get<Category[]>(this.API_URL);
    }
}