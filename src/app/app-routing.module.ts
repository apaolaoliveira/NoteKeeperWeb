import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { DeleteCategoryComponent } from './components/categories/delete-category/delete-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { ListArchiveNotesComponent } from './components/notes/list-archive-notes/list-archive-notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories/list',
    pathMatch: 'full'
  },
  {
    path: 'notes/list',
    component: ListNotesComponent
  },
  {
    path: 'notes/list/archive',
    component: ListArchiveNotesComponent
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
  },
  
  {
    path: 'categories/list',
    component: ListCategoriesComponent
  },
  {
    path: 'categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'categories/edit/:id',
    component: EditCategoryComponent
  },
  {
    path: 'categories/delete/:id',
    component: DeleteCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
