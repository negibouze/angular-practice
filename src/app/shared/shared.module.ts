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
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTreeModule
} from '@angular/material';

import {
  ContentAddFormComponent,
  ContentHeaderComponent,
  ContentSearchFormComponent,
  CustomIconButtonComponent,
  OpenDialogIconButtonComponent
} from './components';

@NgModule({
  declarations: [
    ContentAddFormComponent,
    ContentHeaderComponent,
    ContentSearchFormComponent,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule
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
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTreeModule,
    ContentAddFormComponent,
    ContentHeaderComponent,
    ContentSearchFormComponent,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ]
})
export class SharedModule {}
