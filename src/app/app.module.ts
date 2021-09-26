import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {RouterModule} from "@angular/router";
import {Ng7BootstrapBreadcrumbModule} from "ng7-bootstrap-breadcrumb";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from '@angular/material/tooltip';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TitleService} from "./title.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    Ng7BootstrapBreadcrumbModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
    MatTooltipModule,
    MatSelectModule,
    MatAutocompleteModule,
    FontAwesomeModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
