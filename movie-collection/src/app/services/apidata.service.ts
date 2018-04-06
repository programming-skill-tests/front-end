import {Injectable} from '@angular/core';
import { Film } from "../models/film";
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiDataService {


  constructor( private api: ApiService) {
  }
  // Simulate GET /todos
  getAllFilms(): Observable<Film[]> {
    return this.api.getAllFilmdetails();
  }


  addFilm(film: Film): Observable<Film> {
    return this.api.AddFilm(film);
  }

  removeFilm(filmId: number): Observable<Film> {
    return this.api.deleteFilm(filmId);
  }

  getFilm(filmId: number): Observable<Film> {
    return this.api.getFIlm(filmId);
  }

  updateFilm(film: Film): Observable<Film> {
    return this.api.updateFilm(film);
  }


}