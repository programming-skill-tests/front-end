import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponents,AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { AddNewMovieComponent } from './add-new-movie/add-new-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesGridComponent,
    AddNewMovieComponent,
    AppComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
