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
  MatDividerModule,
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
  ContentHeaderComponent,
  CustomIconButtonComponent,
  OpenDialogIconButtonComponent
} from './components';

@NgModule({
  declarations: [
    ContentHeaderComponent,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule
  ],
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
    MatDividerModule,
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
    ContentHeaderComponent,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ]
})
export class SharedModule {}
