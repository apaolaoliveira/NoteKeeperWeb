import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Note } from 'src/app/models/note';
import { CategoryService } from 'src/app/services/category.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html'
})
export class ListNotesComponent implements OnInit{
  notes: Note[] = [];
  categories: Category[] = [];

  constructor(
    private noteService:NoteService,
    private categoryService: CategoryService,
    private toastService: ToastrService
  ){ }

  ngOnInit(): void {
    this.SelectAllNotes();

    this.categoryService.GetAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  SelectAllNotes(): void {
    this.noteService.GetUnarchiveNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  SelectNotesByCategory(category: Category){
    this.noteService.SelectNotesByCategory(category).subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  FilterByCategory(category: Category | null){
    if(category == null){
      this.SelectAllNotes();
      return;
    }

    this.SelectNotesByCategory(category);
  }

  FileNote(note: Note){
    note.archive = true;

    this.noteService.Edit(note).subscribe((note: Note) =>{
      this.toastService.success(`Note '${note.title} was filed!'`, 'Success');

      this.noteService.GetUnarchiveNotes().subscribe((notes: Note[]) =>{
        this.notes = notes;
      });
    })
  }
}

