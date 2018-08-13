import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movieModel';
import { MovieService } from './../services/movies.services';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public movieinfo: MovieModel;
  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieinfo = new MovieModel();
  }

  addMovie() {
    if(this.movieinfo.title == null  || this.movieinfo.genre == null || this.movieinfo.cast == null || this.movieinfo.director == "0") {
      alert("Please Enter all the Informaion");
      return;
    }
    this.movieService.addNewMovieDetails(this.movieinfo).subscribe(
      success => {
        this.router.navigateByUrl('');
      },
      (error:String) => {
        alert("Error occured");
      });
  }
  cancel() {
    this.router.navigateByUrl('');
  }
}
