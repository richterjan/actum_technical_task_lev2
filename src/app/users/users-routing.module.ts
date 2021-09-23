import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, data: {
      title: 'Users',
      breadcrumb: [
        {
          label: 'Users',
          url: ''
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}