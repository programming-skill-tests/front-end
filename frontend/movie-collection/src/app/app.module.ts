import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MovieListComponent } from './components/movies-list/movies-list.component';
import { MovieService } from './services/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
