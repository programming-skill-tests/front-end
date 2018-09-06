import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movies.services';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { AddMovieComponent } from './movie-add/add-movie.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }