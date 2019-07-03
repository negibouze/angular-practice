import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule
  ]
})
export class SharedModule {}
