import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { UserSearchComponent } from './contents/user-search/user-search.component';
import { UserAddComponent } from './contents/user-add/user-add.component';

const subRoutes: Routes = [
  {
    path: 'user',
    component: UserSearchComponent
  },
  {
    path: 'user/add',
    component: UserAddComponent
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: subRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
