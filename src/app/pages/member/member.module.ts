import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MemberRoutingModule } from './member-routing.module';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberSearchComponent } from './member-search/member-search.component';

@NgModule({
  declarations: [MemberAddComponent, MemberSearchComponent],
  imports: [SharedModule, MemberRoutingModule]
})
export class MemberModule {}
