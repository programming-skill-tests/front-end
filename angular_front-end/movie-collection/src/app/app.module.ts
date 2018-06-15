import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from './services/movie.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';



@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieAddComponent
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
