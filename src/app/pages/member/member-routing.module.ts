import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MemberAddComponent } from './member-add/member-add.component';

const router: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: MemberSearchComponent
  },
  {
    path: 'add',
    component: MemberAddComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
