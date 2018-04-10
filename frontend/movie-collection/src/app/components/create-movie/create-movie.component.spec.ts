import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateMovieComponent } from './create-movie.component'
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movies.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('CreateMovieComponent', () => {
    
     let component: CreateMovieComponent;
     let fixture: ComponentFixture<CreateMovieComponent>;
    
     beforeEach(async(() => { 
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, FormsModule , HttpClientModule,
              ],
          declarations: [ CreateMovieComponent ], 
          providers: [MovieService], 
        })
        .compileComponents();
      }));

       
     beforeEach(()=> {
       TestBed.configureTestingModule({
        imports: [
            RouterTestingModule, FormsModule , HttpClientModule,
          ],
           declarations: [ CreateMovieComponent ],
           providers: [MovieService], 
       });
       fixture = TestBed.createComponent(CreateMovieComponent);
       component = fixture.componentInstance;
     });
     

     it('should have a Component',()=> {
        expect(component).toBeTruthy();
      });

      it('should have a list of directors', () => {
        expect(component.directors).toBeDefined();
      });

      it('should have a genre checkboxes', () => {
        expect(component.movieType).toBeDefined();
      });

})