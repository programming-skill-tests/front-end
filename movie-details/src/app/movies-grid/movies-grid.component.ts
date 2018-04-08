import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http,URLSearchParams, Headers } from "@angular/http";
import { Movie_detail } from "../Movie_detail";

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit {

  moviedetaillist: Movie_detail[];

  constructor(private router: Router,private http : Http) {
    this.getMovieDetails();
   }

/**
 * set movies detail to the grid
 */
  getMovieDetails() : void{
      this.http.get('http://localhost:3000/movies-data')
      .subscribe(res => this.moviedetaillist =
      res.json() as Movie_detail[]);
     }

     /**
      * Navigate to the next page
      */
    navigate() {
        this.router.navigate(["AddNewMovie"]);
    }

  ngOnInit() {
  }

}
