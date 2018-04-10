import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/Observable';
import { MovieListComponent } from '../components/movies-list/movies-list.component';
import { Router } from '@angular/router';


@Injectable()
export class MovieService {

  private baseUrl = 'http://localhost:9095';

  constructor(private http: HttpClient, private router: Router) { }

  createMovieData(movieData: Movie) {
    console.log('saving movie data:' + movieData);
    return this.http.post(this.baseUrl+'/api/createMovieData', movieData);
  }

  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl+'/api/moviesList');

  }

  deleteMovieData(movieId: string): Observable<Movie> {
    const path = this.baseUrl+'/api/deleteMovieData/'.concat(movieId);
    return this.http.delete<Movie>(path);

  }

}
