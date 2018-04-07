import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailsComponent } from './filmdetails.component';
import {RouterTestingModule} from '@angular/router/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FilmdetailsComponent', () => {
  let component: FilmdetailsComponent;
  let fixture: ComponentFixture<FilmdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailsComponent ],
      imports: [ RouterTestingModule,FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
