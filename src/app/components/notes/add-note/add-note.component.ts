import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Note } from 'src/app/models/note';
import { CategoryService } from 'src/app/services/category.service';
import { NoteService } from 'src/app/services/note.service';

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
    this.note = new Note ('', '', 'dark', 0, 0);
  }

  ngOnInit(): void {
    this.categoryService.GetAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  AddNote(){
    this.noteService.Add(this.note).subscribe((note: Note) => {
      this.toastService.success(`Note '${note.title}' added!`, 'Success');
      this.router.navigate(['/notes', 'list']); 
    });
  }
}
