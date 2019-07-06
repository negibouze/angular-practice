import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanySearchComponent } from './company-search/company-search.component';

@NgModule({
  declarations: [CompanyAddComponent, CompanySearchComponent],
  imports: [SharedModule, CompanyRoutingModule]
})
export class CompanyModule {}
