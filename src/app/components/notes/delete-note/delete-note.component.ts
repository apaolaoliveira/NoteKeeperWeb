import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { noteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
  note:Note;

  constructor(
    private noteService: noteService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.note = new Note ('', '', 'dark', 1, 0);
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!); // the exclamation mark is equal 'as string'

    this.note = this.noteService.GetNoteById(id)!;
  }

  DeleteNote(){
    this.noteService.Delete(this.note);
    this.router.navigate(['/notes', 'list']);
  }
}
