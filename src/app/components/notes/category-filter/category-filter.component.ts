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

  constructor(){
    this.onSelectedFilter = new EventEmitter();
  }

  GetAll(){
    this.onSelectedFilter.emit(null);
  }
  
  SelectByFilter(category: Category){
    this.onSelectedFilter.emit(category);
  }
}
