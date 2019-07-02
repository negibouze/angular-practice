import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule]
})
export class SharedModule {}
