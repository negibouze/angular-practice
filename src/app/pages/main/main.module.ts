import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MainRoutingModule } from './main-routing.module';

import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { MainComponent } from './main/main.component';
import { UserAddComponent } from './contents/user-add/user-add.component';
import { UserSearchComponent } from './contents/user-search/user-search.component';
import { ElementSearchComponent } from './contents/element-search/element-search.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    UserAddComponent,
    UserSearchComponent,
    ElementSearchComponent
  ],
  imports: [SharedModule, MainRoutingModule]
})
export class MainModule {}
