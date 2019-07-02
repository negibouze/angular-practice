import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { UserSearchComponent } from './contents/user-search/user-search.component';
import { UserAddComponent } from './contents/user-add/user-add.component';

@NgModule({
  declarations: [MainComponent, UserSearchComponent, UserAddComponent],
  imports: [SharedModule, MainRoutingModule]
})
export class MainModule {}
