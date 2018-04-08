import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { NgForm } from '@angular/forms';
import { MovieService } from '../../services/movies.service';
import { KeyValuePair } from '../../models/common.model';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }
  private baseUrl = 'http://localhost:4200';

  moviesList: Movie[] = [];
  
  tempList : string = '';
  tempDeleteList : KeyValuePair[] = [];
  
  ngOnInit(): void {
    
    this.getMoviesList();
  }
  
  selectAll(event) {
    if(event.target.checked) {
      for(var i=0;i<this.moviesList.length;i++) {
        this.tempDeleteList[i] = {id : this.moviesList[i].id, checked : true};
        const get_id = document.getElementById(this.moviesList[i].id) as HTMLInputElement;
        get_id.checked = true;
      }
    }
    else {
      for(var i=0;i<this.moviesList.length;i++) {
        this.tempDeleteList[i] = {id : this.moviesList[i].id, checked : false};
        const get_id = document.getElementById(this.moviesList[i].id) as HTMLInputElement;
        get_id.checked = false;
      }
    }
    
  }

  selectedMovies(event, id) {
    if(event.target.checked) {
      for(var i=0;i<this.moviesList.length;i++) {
        if(this.tempDeleteList[i].id == id) {
          this.tempDeleteList[i].checked = true;
         
          break;
        }
      }
    }
    else {
      for(var i=0;i<this.moviesList.length;i++) {
        if(this.tempDeleteList[i].id == id) {
          this.tempDeleteList[i].checked = false;
          break;
        }
      }
    }   
   
  }

  getMoviesList() {
    this.movieService.getMoviesList().subscribe(
      moviesList => {
        this.moviesList = moviesList;
        for(var i=0;i<moviesList.length;i++) {
          this.tempDeleteList[i] = {id : moviesList[i].id, checked : false};
        }
      });
      this.tempList = '';
    }

  deleteEmployee(): void {
    for(var i=0;i<this.tempDeleteList.length;i++) {
      if(this.tempDeleteList[i].checked) {
        var actualId = this.tempDeleteList[i].id;
        this.tempList = this.tempList+actualId+',';
      
      }
    }
    this.movieService.deleteMovieData(this.tempList).subscribe(
      moviesList => {
        this.moviesList = this.moviesList.filter(movie => movie.id != actualId);
        this.getMoviesList();
      });
      
 
   }
     
   
}
