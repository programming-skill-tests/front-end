import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../../services/api.service';
import { FilmCreateComponent } from './film-create.component';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpModule } from '@angular/http';
describe('FilmCreateComponent', () => {
  let component: FilmCreateComponent;
  let fixture: ComponentFixture<FilmCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCreateComponent ],
      imports:[FormsModule, HttpModule, ReactiveFormsModule,RouterTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCreateComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
  expect(component.filmForm.valid).toBeFalsy();
});

it('should create form with 4 controls', () => {
    expect(component.filmForm.contains('title')).toBeTruthy();
    expect(component.filmForm.contains('director')).toBeTruthy();
    expect(component.filmForm.contains('cast')).toBeTruthy();
    expect(component.filmForm.contains('genre')).toBeTruthy();
  });

it('should make the title controll required', () => {
    let control= component.filmForm.controls['title'];

    control.setValue('');

    expect(control.valid).toBeFalsy();

  });

it('should make the director controll required', () => {
    let control= component.filmForm.controls['director'];

    control.setValue('');

    expect(control.valid).toBeFalsy();
    
  });

it('should make the cast controll required', () => {
    let control= component.filmForm.controls['cast'];

    control.setValue('');

    expect(control.valid).toBeFalsy();
    
  });

it('should make the genre controll required', () => {
    let control= component.filmForm.controls['genre'];

    control.setValue('');

    expect(control.valid).toBeFalsy();
    
  });

it('submitting form emits fil details', () => {
    expect(component.filmForm.valid).toBeFalsy();
    component.filmForm.controls['title'].setValue("test");
    component.filmForm.controls['director'].setValue("Steven Spielberg");
    component.filmForm.controls['cast'].setValue("Olivia Cooke/Tye Sheridan");
    component.filmForm.controls['genre'].setValue("Action");
    expect(component.filmForm.valid).toBeTruthy();


    // Trigger the save function
    component.save(component.filmForm.value);

  });

});
