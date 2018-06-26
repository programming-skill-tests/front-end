import { Component, OnInit } from '@angular/core';
import { MovieData } from './../models/movie.model';
import { MovieService } from './../services/movie.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  deleteSelection : String[] = [];
  data: MovieData[] = [];
  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieService.getMoviesList().subscribe(res =>{
      this.data = res});
  }

  addNew() {
    this.router.navigateByUrl('add');
  }

  onSelectAll(event) {
    var checkboxes = document.getElementsByTagName('input');
    if (event.target.checked) {
      var j=0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
                this.deleteSelected[j++] = checkboxes[i].id;
            }
        }
    } else {
      this.deleteSelection = [];
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
  }

  deleteSelected() {
      var checkboxes = document.getElementsByTagName('input');
      var j=0;
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          if(checkboxes[i].checked && checkboxes[i].id != 'selectAll') {
            this.deleteSelection[j++] = checkboxes[i].id;
          }
        }
      }
      if(this.deleteSelection.length == 0) {
        alert("Select at least one movie to delete!");
        return false;
      } 
      for (var i = 0; i < this.deleteSelection.length; i++) {
        this.movieService.deleteSelectedMovies(this.deleteSelection[i]).subscribe((response) => {
            console.log("Deleted");         
        });
      }
      for (var i = 0; i < this.deleteSelection.length; i++) {
        this.data = this.data.filter(movie => movie.id != this.deleteSelection[i]);
      }
      this.deleteSelection = [];
  }

  onSelectCheckbox(event) {
    if(!event.target.checked) {
      var headerCheckBox = document.getElementById('selectAll') as HTMLInputElement;
      headerCheckBox.checked = false;
      this.deleteSelection = [];
    }
  }

}
