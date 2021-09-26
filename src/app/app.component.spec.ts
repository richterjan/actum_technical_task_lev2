import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Ng7BootstrapBreadcrumbModule} from "ng7-bootstrap-breadcrumb";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        Ng7BootstrapBreadcrumbModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        OverlayModule,
        MatTooltipModule,
        MatSelectModule,
        MatAutocompleteModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
