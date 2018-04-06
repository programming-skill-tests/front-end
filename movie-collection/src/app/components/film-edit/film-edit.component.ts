import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiDataService } from '../../services/apidata.service';
import { Film } from "../../models/film";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {
  filmForm: FormGroup;
  Directors = [
    {name: 'Steven Spielberg'},
    {name: 'Ryan Coogler'},
    {name: 'Christopher Nolan'},
    {name: 'Joss Whedon'}
  ];

  film = {}
  constructor(private fb: FormBuilder,private filmDataService: ApiDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //Editting form declration
    this.filmForm = this.fb.group({
      id: [''],
      title: ['', Validators.required ],
      director: new FormControl('',Validators.required),
      cast: ['', Validators.required ],
      genre: new FormControl('',Validators.required),
   });
   this.getFilm(this.route.snapshot.params['id']);
  }


  getFilm(id){
    this.filmDataService
      .getFilm(id)
      .subscribe(
        (film) => {
          this.film = film;
        }
      );
  }
  
  //Saving Updated film details
  save(value){
    this.filmDataService.updateFilm(value)
    .subscribe(
      (newfilm) => {
        this.router.navigate(['/filmdetails']);
      }
    );
  }

}
