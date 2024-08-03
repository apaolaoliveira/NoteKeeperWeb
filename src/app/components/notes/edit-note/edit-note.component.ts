import { ToastrService } from 'ngx-toastr';
import { Note } from 'src/app/models/note';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html'
})
export class EditNoteComponent implements OnInit{
  note: Note;
  categories: Category[] = [];

  constructor(
    private noteService: NoteService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ){
    this.note = new Note ('', '', 'dark', 0, 0);
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!); // the exclamation mark is equal 'as string'

    this.noteService.GetNoteById(id).subscribe((note: Note) => {
      this.note = note;
    });

    this.categoryService.GetAll().subscribe((categories: Category[]) =>{
      this.categories = categories;
    });
  }

  EditNote(){
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
    
    this.noteService.Edit(this.note).subscribe((note: Note) => {
      this.toastService.success(`Note "${note.title}" edited!`, 'Success');
      this.router.navigate(['/notes', 'list']); 
    });
  }
}
