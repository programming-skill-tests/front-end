import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Film } from "../../models/film";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.css'],
  providers: [ApiService]
})
export class FilmCreateComponent implements OnInit {
  filmForm: FormGroup;
  Directors = [
    {name: 'Steven Spielberg'},
    {name: 'Ryan Coogler'},
    {name: 'Christopher Nolan'},
    {name: 'Joss Whedon'}
  ];
  
  constructor(private fb: FormBuilder,private filmDataService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filmForm = this.fb.group({
      title: ['', Validators.required ],
      director: new FormControl('',Validators.required),
      cast: ['', Validators.required ],
      genre: new FormControl('',Validators.required),
      
   });
  }

  //Saving new film details
  save(value){
    value["selected"]=false;
    this.filmDataService.AddFilm(value)
    .subscribe(
      (newfilm) => {
        this.router.navigate(['/filmdetails']);
      }
    );
  }

}
