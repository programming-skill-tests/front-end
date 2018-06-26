import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes : Routes = [
  {path: 'movies', component : MoviesListComponent },
  {path: '', component : MoviesListComponent },
  {path: 'add', component : MovieAddComponent }
]

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [ MoviesListComponent, MovieAddComponent ]