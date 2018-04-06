import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';
import { FilmCreateComponent } from './components/film-create/film-create.component';
import { FilmEditComponent } from './components/film-edit/film-edit.component'


//Complete Routing Of this Application
const routes: Routes = [
  { path: 'filmdetails', component: FilmdetailsComponent },
  { path: '', redirectTo: '/filmdetails', pathMatch: 'full' },
  { path: 'film-create',component: FilmCreateComponent,data: { title: 'Add New Movie' }},
  { path: 'film-edit/:id',component: FilmEditComponent,data: { title: 'Edit Movie' }}
];


export const appRoutingModule = RouterModule.forRoot(routes);
