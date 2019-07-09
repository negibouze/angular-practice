import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTreeModule
} from '@angular/material';

import {
  CustomIconButtonComponent,
  OpenDialogIconButtonComponent
} from './components';

@NgModule({
  declarations: [CustomIconButtonComponent, OpenDialogIconButtonComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTreeModule,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ]
})
export class SharedModule {}
