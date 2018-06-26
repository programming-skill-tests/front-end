import { Component, OnInit } from '@angular/core';
import { MovieData } from '../models/movie.model';
import { MovieService } from './../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  public form: NgForm;
  public options = [
    {
      text: 'CJ',
      value: 'CJ'
    },
    {
      text: 'Arjun',
      value: 'Arjun'
    },
    {
      text: 'Narasimha',
      value: 'Narasimha'
    }
  ];
  public movieWrapperData: MovieData;
  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieWrapperData = new MovieData();
    var selectBox = document.getElementById('director') as HTMLSelectElement;

    for(var i = 0, l = this.options.length; i < l; i++){
      var option = this.options[i];
      selectBox.options.add( new Option(option.text, option.value) );
    }
    
  }
  
  addMovie() {
    if(this.movieWrapperData.name == null || this.movieWrapperData.director == null || this.movieWrapperData.genre == null || this.movieWrapperData.cast == null || this.movieWrapperData.director == "0") {
      alert("Enter all the data and then proceed");
      return;
    }
    this.movieService.addNewMovie(this.movieWrapperData).subscribe(
      success => {
        this.router.navigateByUrl('movies');
      },
      (error:String) => {
        alert("Error occured");
      });
  }

  onDirectorChange() {
    var selectBox = document.getElementById('director') as HTMLSelectElement;
    this.movieWrapperData.director = selectBox.value;
  }

  cancel() {
    this.router.navigateByUrl('movies');
  }

}
