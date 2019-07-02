import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, LoginRoutingModule]
})
export class LoginModule {}
