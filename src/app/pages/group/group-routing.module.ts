import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupAddComponent } from './group-add/group-add.component';
import { GroupSearchComponent } from './group-search/group-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: GroupSearchComponent
  },
  {
    path: 'add',
    component: GroupAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
