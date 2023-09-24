import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Note } from 'src/app/models/note';
import { noteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  note:Note;

  constructor(
    private noteService: noteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ){
    this.note = new Note ('', '', 'dark', 1, 0);
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!); // the exclamation mark is equal 'as string'

    this.noteService.GetNoteById(id).subscribe((note: Note) => {
      this.note = note;
    });
  }

  EditNote(){
    this.noteService.Edit(this.note).subscribe((note: Note) => {
      this.toastService.success(`Note ${note.title} edited!`, 'Success');
      this.router.navigate(['/notes', 'list']); 
    });
  }
}
