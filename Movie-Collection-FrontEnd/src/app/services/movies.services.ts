import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MovieModel } from '../models/movieModel';
@Injectable()
export class MovieService {
    headers: any;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    getMoviesList() {
        console.log("welcome")
        return this.http.get('http://localhost:8081/api/movies/getlist')
            .map((res: Response) => res.json()
            ).catch(error => {
                console.log("error" + error.json());
                return Observable.throw(error.json());
            });
            

    }
    addNewMovieDetails(movieModel: MovieModel) {
        return this.http.post('/api/movies/add', movieModel)
            .map(res => <String>res.json())
            .catch(res => {
                return "Error";
            });
    }
    deleteSelectedMovies(deleteSelection: String): Observable<MovieModel> {
        return this.http.post('/api/movies/delete', deleteSelection)
            .map((res: Response) => res.json()
            ).catch((error: MovieModel) => Observable.throw('Error'));
    }
}