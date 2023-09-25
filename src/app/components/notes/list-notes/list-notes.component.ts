import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { noteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html'
})
export class ListNotesComponent implements OnInit{
  notes: Note[] = []

  constructor(private noteService:noteService){ }

  ngOnInit(): void {
    this.noteService.GetAll().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }
}

