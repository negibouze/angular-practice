import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanySearchComponent } from './company-search/company-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: CompanyAddComponent
  },
  {
    path: 'add',
    component: CompanySearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
