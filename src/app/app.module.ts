import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { CardNoteComponent } from './components/notes/card-note/card-note.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { CategoryFilterComponent } from './components/notes/category-filter/category-filter.component';
import { ListArchiveNotesComponent } from './components/notes/list-archive-notes/list-archive-notes.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/categories/delete-category/delete-category.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    // notes
    ListNotesComponent,
    CardNoteComponent,
    AddNoteComponent,
    EditNoteComponent,
    DeleteNoteComponent,
    ListArchiveNotesComponent,

    // categories
    ListCategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    CategoryFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
