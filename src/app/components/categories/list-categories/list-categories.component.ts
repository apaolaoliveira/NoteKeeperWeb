import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html'
})
export class ListCategoriesComponent implements OnInit{
  categories: Category[] = [];
  
  constructor(private categoryService: CategoryService){ }
  
  ngOnInit(): void {
      this.categoryService.GetAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
