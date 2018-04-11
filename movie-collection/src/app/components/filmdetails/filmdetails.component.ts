import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Film } from "../../models/film";

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css'],
  providers: [ApiService]
})
export class FilmdetailsComponent implements OnInit {

  films: Film[] = [];
  selectedrows: any[]=[];
  selectedAll: any;

  constructor(private filmDataService: ApiService) { }
  
  ngOnInit() {
    this.getFilms();
  }

  
  getFilms(){
    this.filmDataService
      .getAllFilmdetails()
      .subscribe(
        (films) => {
          this.films = films;
        }
      );
  }

  //Single row selection
  selectrow(e){
    if(e.target.checked){
      if (this.selectedrows.indexOf(e.target.value) == -1) {
        this.selectedrows.push(e.target.value)
      }
    }
    if(!e.target.checked){
      const index: number = this.selectedrows.indexOf(e.target.value);
      if (index !== -1) {
        this.selectedrows.splice(index,1);
      }
    }
  }

  delete_films(){
    for(var i=0;i<this.selectedrows.length;i++){
      this.films = this.films.filter((t) => t["id"] !== this.selectedrows[i]);
      this.filmDataService
      .deleteFilm(this.selectedrows[i])
      .subscribe(
        (_) => {
          this.getFilms();
        }
      );
    }
  }

  //Selecting all the rows
  selectAll(e) {
    for (var i = 0; i < this.films.length; i++) {
      this.films[i].selected = this.selectedAll;
      if(e.target.checked){
        if (this.selectedrows.indexOf(JSON.stringify(this.films[i]["id"])) == -1) {
          this.selectedrows.push(JSON.stringify(this.films[i]["id"]));
        }
      }
      if(!e.target.checked){
          const index: number = this.selectedrows.indexOf(JSON.stringify(this.films[i]["id"]))
          if (index !== -1) {
            this.selectedrows.splice(index,1);
          }
      }
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.films.every(function(item:any) {
        return item.selected == true;
      })
  }
}
