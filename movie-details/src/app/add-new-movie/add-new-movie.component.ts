import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Http,URLSearchParams, Headers } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent implements OnInit {

  
  constructor(private location: Location,private http : Http,private router: Router) { 
    
  }

    data ;

    /**
     * Go back to the previous Page
     */
    goBack() {
        //this.location.back();
        this.router.navigate(["/"]);
        
    }

    /**
     * 
     * @param title movie Name
     * @param director Director Name
     * @param cast Movie casts
     */
    setData(title : string, director : string,cast : string) : void{
      this.data = {
        "title": title, 
        "director" : director , 
        "cast" : cast , 
        "genre" : "Dummy Data"
      }

      console.log(this.data);
      this.setMovieDetails();
      this.goBack();
    }

    /**
     * Sets the data in db.json file
     */
    setMovieDetails() : void {

      let search = new URLSearchParams();
      var headers = new Headers();

      this.http.post("http://localhost:3000/movies-data",
      this.data,
      {headers:headers}).subscribe(res => console.log(res.json()));
    }

  ngOnInit() {
  }

}