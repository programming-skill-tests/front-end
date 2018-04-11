import { TestBed, inject } from '@angular/core/testing';

import { Film } from "../models/film";
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],	
      providers: [ApiService,HttpModule]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllFilms()', () => {

    it('should return an empty array by default ', inject([ApiService], (service: ApiService) => {
      // expect(service.getAllFilmdetails()).toEqual([]);
      service.getAllFilmdetails().subscribe((data) => {expect(data).toEqual([]);
    });
    }));

    it('should return all films', inject([ApiService], (service: ApiService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.AddFilm(film1);
      service.AddFilm(film2);
      // expect(service.getAllFilmdetails()).toEqual([film1, film2]);
      service.getAllFilmdetails().subscribe((data) => {
	      expect(data).toEqual([film1, film2]);
	    });
    }));

  });

  describe('#addFilm(Film)', () => {

    it('should automatically assign an incrementing id', inject([ApiService], (service: ApiService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.AddFilm(film1);
      service.AddFilm(film2);
      // expect(service.getFIlm(1)).toEqual(film1);
      service.getFIlm(1).subscribe((data) => {
	      expect(data).toEqual(film1);
	    });
      // expect(service.getFIlm(2)).toEqual(film2);
      service.getFIlm(1).subscribe((data) => {
	      expect(data).toEqual(film2);
	    });
    }));

  });

   describe('#deleteFilmById(id)', () => {

    it('should remove film with the corresponding id', inject([ApiService], (service: ApiService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.AddFilm(film1);
      service.AddFilm(film2);
      // expect(service.getAllFilmdetails()).toEqual([film1, film2]);
      service.getAllFilmdetails().subscribe((data) => {
	      expect(data).toEqual([film1, film2]);
	    });
      service.deleteFilm(1);
      // expect(service.getAllFilmdetails()).toEqual([film2]);
      service.getAllFilmdetails().subscribe((data) => {
	      expect(data).toEqual([film2]);
	    });
      service.deleteFilm(2);
      // expect(service.getAllFilmdetails()).toEqual([]);
      service.getAllFilmdetails().subscribe((data) => {
	      expect(data).toEqual([]);
	    });
    }));

    it('should not removing anything if film with corresponding id is not found', inject([ApiService], (service: ApiService) => {
      let film1 = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      let film2 = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.AddFilm(film1);
      service.AddFilm(film2);
      // expect(service.getAllFilmdetails()).toEqual([film1, film2]);
      service.getAllFilmdetails().subscribe((data) => {
	      expect(data).toEqual([film1, film2]);
	    });
      service.deleteFilm(3);
      // expect(service.getAllFilmdetails()).toEqual([film1, film2]);
      service.getAllFilmdetails().subscribe((data) => {
	      expect(data).toEqual([film1, film2]);
	    });
    }));

  });


   describe('#updateFilmById(id, values)', () => {

    it('should return fim with the corresponding id and updated data', inject([ApiService], (service: ApiService) => {
      let film = new Film({title: "Ready Player One", director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false});
      service.AddFilm(film);
      // let updatedFilm = service.updateFilm(1,{title: "Ready Player two"});
      // expect(updatedFilm.title).toEqual('Ready Player two');
      service.updateFilm(1,{title: "Ready Player two",director: "Steven Spielberg", genre: "Action", cast: "Olivia Cooke/Tye Sheridan", selected: false}).subscribe((data) => {
	      expect(data.title).toEqual('Ready Player two');
	    });
    }));

    it('should return null if film is not found', inject([ApiService], (service: ApiService) => {
      let film = new Film({title: "Black Panther", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false});
      service.AddFilm(film);
      // let updatedFilm = service.updateFilm(2,{title: "Black Panther Two"});
      // expect(updatedFilm).toEqual(null);
      service.updateFilm(2,{title: "Black Panther Two", director: "Ryan Coogler", genre: "Action", cast: "Chadwick Boseman/Michael B. Jordan", selected: false}).subscribe((data) => {
	      expect(data).toEqual(null);
	    });
    }));

  });

});
