import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movies-list.component'
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movies.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('MovieListComponent', () => {
    
     let component: MovieListComponent;
     let fixture: ComponentFixture<MovieListComponent>;
    
     beforeEach(async(() => { 
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, FormsModule , HttpClientModule,
              ],
          declarations: [ MovieListComponent ], 
          providers: [MovieService], 
        })
        .compileComponents();
      }));

       
     beforeEach(()=> {
       TestBed.configureTestingModule({
        imports: [
            RouterTestingModule, FormsModule , HttpClientModule,
          ],
           declarations: [ MovieListComponent ],
           providers: [MovieService], 
       });
       fixture = TestBed.createComponent(MovieListComponent);
       component = fixture.componentInstance;
     });
     

     it('should have a Component',()=> {
        expect(component).toBeTruthy();
      });

      it('should have a title', () => {
        expect(component.title).toEqual('Movie Collection');
      });
    
   })