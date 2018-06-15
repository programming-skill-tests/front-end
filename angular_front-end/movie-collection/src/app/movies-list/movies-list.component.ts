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
  deleteSelection : String;
  data: Observable<MovieData>;
  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.deleteSelection = new String();
    this.data = this.movieService.getMoviesList();
  }

  addNew() {
    this.router.navigateByUrl('add');
  }

  onSelectAll(event) {
    var checkboxes = document.getElementsByTagName('input');
    if (event.target.checked) {
      this.deleteSelection = "all";
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
      this.deleteSelection = "";
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
  }

  deleteSelected() {
    if(this.deleteSelection == 'all') {
      this.data = this.movieService.deleteSelectedMovies(this.deleteSelection);
    }
    else {
      var checkboxes = document.getElementsByTagName('input');
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          if(checkboxes[i].checked) {
            this.deleteSelection = checkboxes[i].id + ",";
          }
        }
      }
      if(this.deleteSelection == '') {
        alert("Select at least one movie to delete!");
        return false;
      } 
      else {
        this.deleteSelection = this.deleteSelection.slice(0, -1);
      }
      this.data = this.movieService.deleteSelectedMovies(this.deleteSelection);
      this.deleteSelection = "";
    }
  }

  onSelectCheckbox(event) {
    if(!event.target.checked) {
      var headerCheckBox = document.getElementById('selectAll') as HTMLInputElement;
      headerCheckBox.checked = false;
      this.deleteSelection = "";
    }
  }

}
