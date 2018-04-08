import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { NgForm } from '@angular/forms';
import { MovieService } from '../../services/movies.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateMovieComponent implements OnInit {
  newMovieData: Movie = new Movie();
  constructor(private movieService: MovieService, private router: Router) { }
  tempList : string = '';
  tempCheckBox : boolean[] = [];
  
  ngOnInit() {
  }


  toggleSelection(event, id) {
    if(event.target.checked) {
      this.tempCheckBox[id] = true;
    }
    else {
      this.tempCheckBox[id] = false;
    }
    console.log(this.movieType.length);
  }


  createMovieData(movieForm: NgForm): void {
    this.tempList = '';
    for(var i=0;i<this.movieType.length;i++) {
      if(this.tempCheckBox[i]) {
        this.tempList = this.tempList + this.movieType[i].value + ", ";
      }
    }
    this.newMovieData.genre = this.tempList.substring(0, this.tempList.length - 2);
    this.movieService.createMovieData(this.newMovieData).subscribe(
      data => {
        console.log('Movie Data created', JSON.stringify(data));
    });
    window.location.reload();
    this.router.navigate(['/moviesList']);
  }


  onSearchChange() {
    console.log('New Employee Object:', JSON.stringify(this.newMovieData));
  }


  public directors = [
    { value: 'Rajamouli', display: 'Rajamouli' },
    { value: 'Shankar', display: 'Shankar' },
    { value: 'Sanjay Leela Bhansali', display: 'Sanjay Leela Bhansali' },
    { value: 'Rishab Shetty', display: 'Rishab Shetty' },
    { value: 'Dileesh Pothan', display: 'Dileesh Pothan' }
  ];
 


  public movieType = [
    {id:'0', value: 'Action', display: 'Action' },
    {id:'1', value: 'Comedy', display: 'Comedy' },
    {id:'2', value: 'Drama', display: 'Drama' },
    {id:'3', value: 'Horror', display: 'Horror' }
  ];

 
}
