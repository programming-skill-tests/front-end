import { TestBed, inject } from '@angular/core/testing';
import { Film } from "../models/film";
import { ApiDataService } from './apidata.service';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

describe('ApiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],	
      providers: [ApiDataService,ApiService,HttpModule]
    });
  });

  it('should be created', inject([ApiDataService], (service: ApiDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllFilms()', () => {

    it('should return an empty array by default', inject([ApiDataService], (service: ApiDataService) => {
      expect<any>(service.getAllFilms()).toEqual([]);
    }));

    it('should return all films', inject([ApiDataService], (service: ApiDataService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.addFilm(film1);
      service.addFilm(film2);
      expect<any>(service.getAllFilms()).toEqual([film1, film2]);
    }));

  });

  describe('#addFilm(Film)', () => {

    it('should automatically assign an incrementing id', inject([ApiDataService], (service: ApiDataService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.addFilm(film1);
      service.addFilm(film2);
      expect<any>(service.getFilm(1)).toEqual(film1);
      expect<any>(service.getFilm(2)).toEqual(film2);
    }));

  });

   describe('#deleteFilmById(id)', () => {

    it('should remove film with the corresponding id', inject([ApiDataService], (service: ApiDataService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.addFilm(film1);
      service.addFilm(film2);
      expect<any>(service.getAllFilms()).toEqual([film1, film2]);
      service.removeFilm(1);
      expect<any>(service.getAllFilms()).toEqual([film2]);
      service.removeFilm(2);
      expect<any>(service.getAllFilms()).toEqual([]);
    }));

    it('should not removing anything if film with corresponding id is not found', inject([ApiDataService], (service: ApiDataService) => {
      let film1 = new Film({ititle: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.addFilm(film1);
      service.addFilm(film2);
      expect<any>(service.getAllFilms()).toEqual([film1, film2]);
      service.removeFilm(3);
      expect<any>(service.getAllFilms()).toEqual([film1, film2]);
    }));

  });

});
