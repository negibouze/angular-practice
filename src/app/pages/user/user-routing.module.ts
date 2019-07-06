import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './user-add/user-add.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: UserSearchComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
