import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        FontAwesomeModule
      ],
      declarations: [UsersComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Serach fields validator
  it('user field validity', () => {
    const user = component.searchName;
    expect(user.valid).toBeFalsy();

    user.setValue('');
    expect(user.hasError('required')).toBeTruthy();
  });
  it('location field validity', () => {
    const location = component.searchLocation;
    expect(location.valid).toBeFalsy();

    location.setValue('');
    expect(location.hasError('required')).toBeTruthy();
  });
  it('language field validity', () => {
    const language = component.searchLanguage;
    expect(language.valid).toBeFalsy();

    language.setValue('');
    expect(language.hasError('required')).toBeTruthy();
  });
});
