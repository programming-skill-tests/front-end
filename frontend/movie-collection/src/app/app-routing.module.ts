import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movies-list/movies-list.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';

const routes: Routes = [
  { path: '', component: CreateMovieComponent },
  { path: 'moviesList', component: MovieListComponent },
  { path: 'createMovieData', component: CreateMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
