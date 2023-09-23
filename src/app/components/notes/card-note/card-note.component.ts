import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent {
  @Input() note: Note = {
    id: 0,
    title: 'Lavar o cachorro',
    content: 'Pegar a toalha > Pegar o Shampoo',
    theme: 'dark',
    categoryId: 1,
    filed: false
  };
}
