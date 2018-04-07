import { Injectable } from '@angular/core';
import { Film } from "../models/film";
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor( private http: Http) { }

  //Fetching all film records
  public getAllFilmdetails():  Observable<Film[]> {
    return this.http
      .get(API_URL + '/film_details')
      .map(response => {
        const films = response.json();
        return films;
      })
      .catch(this.handleError)
  }

  //Adding new film details
  public AddFilm(film: Film): Observable<Film> {
    return this.http
      .post(API_URL + '/film_details', film)
      .map(response => {
        const films = response.json();
        return films;
      })
      .catch(this.handleError);
  }

  //Updating existing film details
  public updateFilm(film: Film): Observable<Film> {
    return this.http
      .put(API_URL + '/film_details/' + film["id"], film)
      .map(response => {
        const films = response.json();
        return films;
      })
      .catch(this.handleError);
  }

  //Removing film from memmory
  public deleteFilm(filmId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/film_details/' + filmId)
      .map(response => null)
      .catch(this.handleError);
  }

  //Fetching single film details
  public getFIlm(filmId: number): Observable<Film> {
    return this.http
      .get(API_URL + '/film_details/' + filmId)
      .map(response => {
        const film = response.json();
        return film;
      })
      .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
