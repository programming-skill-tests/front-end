import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MovieData } from '../models/movie.model';
@Injectable()
export class MovieService {
    constructor(private http: Http) { }

    getMoviesList(): Observable<MovieData> {
        return this.http.get('/api/movies/list')
            .map((res: Response) => res.json()
            ).catch((error:MovieData) => Observable.throw('Error'));
    }
    addNewMovie(movieData:MovieData) {
        return this.http.post('/api/movies/add',movieData)
            .map(res => <String>res.json())
            .catch(res => {
                return "Error";
            });
    }
    deleteSelectedMovies(deleteSelection:String): Observable<MovieData> {
        return this.http.post('/api/movies/delete',deleteSelection)
            .map((res: Response) => res.json()
            ).catch((error:MovieData) => Observable.throw('Error'));
    }
}