import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent {
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastService: ToastrService
  ){
    this.category = new Category ('');
  }

  AddCategory(){
      this.categoryService.Add(this.category).subscribe((category: Category) => {
        this.toastService.success(`Category '${category.title}' added!`, 'Success');
        this.router.navigate(['/categories', 'list']); 
    });
  }
}
