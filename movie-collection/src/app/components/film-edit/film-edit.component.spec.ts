import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmEditComponent } from './film-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'

describe('FilmEditComponent', () => {
  let component: FilmEditComponent;
  let fixture: ComponentFixture<FilmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmEditComponent ],
      imports:[FormsModule, ReactiveFormsModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
