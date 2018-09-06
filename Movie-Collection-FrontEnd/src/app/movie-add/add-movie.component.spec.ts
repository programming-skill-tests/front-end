import { TestBed,ComponentFixture, async } from '@angular/core/testing';
import { MovieService } from './../services/movies.services';

import { AddMovieComponent } from './add-movie.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieComponent ],
      imports: [RouterTestingModule, FormsModule, HttpModule],
      providers: [MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
