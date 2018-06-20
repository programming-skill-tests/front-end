import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MovieData } from '../models/movie.model';
@Injectable()
export class MovieService {
    constructor(private http: Http) { }

    getMoviesList(): Observable<MovieData[]> {
        return this.http.get('http://localhost:3000/movies')
            .map(res => res.json()
            ).catch(error => Observable.throw('Error'));
    }
    addNewMovie(movieData:MovieData) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/movies',movieData, options)
            .map(res => <MovieData>res.json())
            .catch(res => {
                return "Error";
            });
    }
    deleteSelectedMovies(deleteSelection:String) {
        return this.http.delete('http://localhost:3000/movies/' + deleteSelection).map((response: Response) => response.json());
    }
}