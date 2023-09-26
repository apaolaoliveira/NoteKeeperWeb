import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html'
})
export class EditCategoryComponent implements OnInit{
  category: Category;
  
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ){
    this.category = new Category('', 0);
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoryService.GetCategoryById(id).subscribe((category: Category) => {
      this.category = category;
    });
  }

  EditCategory(){
    this.categoryService.Edit(this.category).subscribe((category: Category) => {
      this.toastService.success(`Note '${category.title}' edited!`, 'Success');
      this.router.navigate(['/categories', 'list']); 
    });
  }
}
