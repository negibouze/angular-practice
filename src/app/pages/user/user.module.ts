import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [UserAddComponent, UserSearchComponent],
  imports: [SharedModule, UserRoutingModule]
})
export class UserModule {}
