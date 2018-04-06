import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailsComponent } from './filmdetails.component';
import {RouterTestingModule} from '@angular/router/testing'

describe('FilmdetailsComponent', () => {
  let component: FilmdetailsComponent;
  let fixture: ComponentFixture<FilmdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailsComponent ],
      imports: [ RouterTestingModule ]
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
