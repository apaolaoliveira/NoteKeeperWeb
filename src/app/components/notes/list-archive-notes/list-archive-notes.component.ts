import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Note } from 'src/app/models/note';
import { CategoryService } from 'src/app/services/category.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-archive-notes',
  templateUrl: './list-archive-notes.component.html'
})
export class ListArchiveNotesComponent implements OnInit {
  notes: Note[] = [];
  categories: Category[] = [];

  constructor(
    private noteService: NoteService, 
    private categoryService: CategoryService,
    private toastService: ToastrService
  ){ }

  ngOnInit(): void {
    this.GetAllNotes();

    this.categoryService.GetAll().subscribe((categories: Category[]) => {
        this.categories = categories;
    });
  }

  GetAllNotes(): void {
    this.noteService.SelectArchiveNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  SelectNotesByCategory(category: Category) {
    this.noteService.SelectArchiveNotesByCategory(category).subscribe((notes: Note[]) => {
        this.notes = notes;
    });
  }

  UnarchiveNote(note: Note) {
    note.archive = false;

    this.noteService.Edit(note).subscribe((note: Note) => {
      this.toastService.success(`Note ${note.title} was unarchive!`, 'Success');

      this.noteService.SelectArchiveNotes().subscribe((notes: Note[]) => (this.notes = notes));
    });
  }

  FilterNotesByCategory(category: Category | null) {
    if (category == null) {
      this.GetAllNotes();
      return;
    }

    this.SelectNotesByCategory(category);
  }
}
