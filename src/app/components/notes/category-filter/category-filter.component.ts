import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styles: [`
    .app-badge-filter {
      cursor: pointer;
    }
  `]
})
export class CategoryFilterComponent {
  @Input({ required: true }) categories: Category[] = [];

  @Output() onSelectedFilter: EventEmitter<Category | null>;

  selectedCategory: string | null = null;

  constructor(){
    this.onSelectedFilter = new EventEmitter();
    this.selectedCategory = 'All';
  }

  GetAll(){
    this.selectedCategory = 'All';
    this.onSelectedFilter.emit(null);
  }
  
  SelectByFilter(category: Category){
    this.selectedCategory = category.title;
    this.onSelectedFilter.emit(category);
  }
}
