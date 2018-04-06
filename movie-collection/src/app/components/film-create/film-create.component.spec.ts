import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCreateComponent } from './film-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'

describe('FilmCreateComponent', () => {
  let component: FilmCreateComponent;
  let fixture: ComponentFixture<FilmCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCreateComponent ],
      imports:[FormsModule, ReactiveFormsModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
