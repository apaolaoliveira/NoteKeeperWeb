import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent {
  category: Category;
  categories: Category[] = [];

  constructor(
    private http: HttpClient
  ){
    this.category = new Category('');
  }

  GetAllCategories(){

  }
  
  SelectByFilter(category: Category){

  }
}
