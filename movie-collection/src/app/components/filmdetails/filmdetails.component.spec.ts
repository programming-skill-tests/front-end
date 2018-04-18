import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailsComponent } from './filmdetails.component';
import { ApiService } from '../../services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpModule } from '@angular/http';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe('FilmdetailsComponent', () => {
  let component: FilmdetailsComponent;
  let fixture: ComponentFixture<FilmdetailsComponent>;
  let service: ApiService;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailsComponent ],
      imports: [FormsModule, HttpModule, ReactiveFormsModule,RouterTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new ApiService(null)
    component = new FilmdetailsComponent(service);
    de = fixture.debugElement.query(By.css('.filmtable'));
    element  = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all the film details', () => {
    spyOn(component,"getFilms");
    component.ngOnInit();
    expect(component.getFilms).toHaveBeenCalled();
  });

  it('should have a table to display the film details', () => {
   expect(element.innerHTML).toContain("thead");
   expect(element.innerHTML).toContain("tbody");
 })

});
