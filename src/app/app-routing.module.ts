import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, data: {title: 'Hlavní nástěnka'}
  },
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},

  {path: '**', component: NotFoundComponent, data: {value: 'notfound'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
