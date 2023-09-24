import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes/list',
    pathMatch: 'full'
  },
  {
    path: 'notes/list',
    component: ListNotesComponent
  },
  {
    path: 'notes/add',
    component: AddNoteComponent
  },
  {
    path: 'notes/edit/:id',
    component: EditNoteComponent
  },
  {
    path: 'notes/delete/:id',
    component: DeleteNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
