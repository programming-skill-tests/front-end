import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';
import { appRoutingModule } from './/app-routing.module';
import { ApiService } from './services/api.service';
import { ApiDataService } from './services/apidata.service';
import { HttpModule } from '@angular/http';
import { FilmCreateComponent } from './components/film-create/film-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmEditComponent } from './components/film-edit/film-edit.component'




@NgModule({
  declarations: [
    AppComponent,
    FilmdetailsComponent,
    FilmCreateComponent,
    FilmEditComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
