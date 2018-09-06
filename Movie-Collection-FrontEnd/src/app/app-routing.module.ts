import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './movie-add/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes : Routes = [
  {path: '', component : MovieListComponent },
  {path: 'add', component : AddMovieComponent }
]

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [ MovieListComponent, AddMovieComponent ]
