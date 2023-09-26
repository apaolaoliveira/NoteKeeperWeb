import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html'
})
export class CardNoteComponent {
  @Input() note: Note;

  @Output() onSelectedFile: EventEmitter<Note>;

  constructor(){
    this.note = new Note('', '', 'dark', 0, 0);
    this.onSelectedFile = new EventEmitter();
  }

  FileNote(note: Note){
    this.onSelectedFile.emit(note);
  }
}
