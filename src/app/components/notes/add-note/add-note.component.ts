import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Note } from 'src/app/models/note';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { NoteService } from 'src/app/services/note.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html'
})
export class AddNoteComponent implements OnInit{
  note: Note;
  categories: Category[] = [];
  
  constructor(
    private noteService: NoteService,
    private categoryService: CategoryService,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.note = new Note('', '', 'dark', 0, 0);
  }

  ngOnInit(): void {
    this.categoryService.GetAll().subscribe((categories: Category[]) => {
      this.categories = categories;      
    });
  }

  AddNote(){
    if(this.note.title === ''){
      this.toastService.warning('Title is required!', 'Warning');
      return;
    }

    if(this.note.content === ''){
      this.toastService.warning('Content is required!', 'Warning');
      return;
    }

    if (this.note.categoryId === 0) {
      this.toastService.warning('Category is required!', 'Warning');
      return;
    }

    this.noteService.Add(this.note).subscribe((note: Note) => {
      this.toastService.success(`Note "${note.title}" added!`, 'Success');
      this.router.navigate(['/notes', 'list']); 
    });
  }
}
