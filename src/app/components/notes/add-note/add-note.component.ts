import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastService: ToastrService
  ) {
    this.note = new Note ('', '', 'dark', 1, 0);
  }

  AddNote(){
    this.noteService.Add(this.note);
    this.toastService.success('New note added!', 'Success');
    this.router.navigate(['/notes', 'list']); 
  }
}
