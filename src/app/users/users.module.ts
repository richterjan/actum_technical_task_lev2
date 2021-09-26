import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersService} from "./users.service";
import {UsersComponent} from "./users.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersRoutingModule} from "./users-routing.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
  providers: [
    UsersService
  ],
})
export class UsersModule {
}
