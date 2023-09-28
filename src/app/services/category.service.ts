import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private CATEGORY_API_URL = `${environment.API_URL}/api/categories`;

    constructor(
        private http: HttpClient
    ){ }

    Add(category: Category): Observable<Category>{
        return this.http.post<Category>(this.CATEGORY_API_URL, category);
    }

    Edit(category: Category): Observable<Category>{
        const url = `${this.CATEGORY_API_URL}/${category.id}`;
        
        return this.http.put<Category>(url, category);
    }

    Delete(category: Category): Observable<any> {
        const url = `${this.CATEGORY_API_URL}/${category.id}`;

        return this.http.delete<Category>(url);
    }

    GetCategoryById(id: number): Observable<Category>{
        const url = `${this.CATEGORY_API_URL}/${id}`;

        return this.http.get<Category>(url);
    }

    GetAll(): Observable<Category[]>{
        return this.http.get<Category[]>(this.CATEGORY_API_URL);
    }
}