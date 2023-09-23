import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { noteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note: Note 
  
  constructor(
    private noteService: noteService,
    private router: Router
  ) {
    this.note = new Note (
      'Estudar astronomia 🪐',
      'Pegar os materiais -> abrir o youtube',
      'dark',
      1,
      0
    )
  }

  addNote(){
    this.noteService.Add(this.note);
    this.router.navigate(['/notes', 'list'])
  }
}
