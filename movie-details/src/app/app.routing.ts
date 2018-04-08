import {MoviesGridComponent} from './movies-grid/movies-grid.component';
import {AddNewMovieComponent  } from "./add-new-movie/add-new-movie.component";

export const AppRoutes : any =[
    {path : "" , component : MoviesGridComponent},
    {path : "AddNewMovie", component : AddNewMovieComponent}
];

export const AppComponents : any = [
    MoviesGridComponent,
    AddNewMovieComponent
];