import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { CardNoteComponent } from './components/notes/card-note/card-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { CategoryFilterComponent } from './components/notes/category-filter/category-filter.component';
import { DeleteCategoryComponent } from './components/categories/delete-category/delete-category.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { ListArchiveNotesComponent } from './components/notes/list-archive-notes/list-archive-notes.component';
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

    // loader
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
