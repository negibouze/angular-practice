import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { GroupRoutingModule } from './group-routing.module';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupSearchComponent } from './group-search/group-search.component';

@NgModule({
  declarations: [GroupAddComponent, GroupSearchComponent],
  imports: [SharedModule, GroupRoutingModule]
})
export class GroupModule {}
