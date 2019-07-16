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
  MatTableModule
} from '@angular/material';

import {
  ContentAddFormComponent,
  ContentHeaderComponent,
  ContentSearchFormComponent,
  ContentSearchResultTableComponent,
  CustomIconButtonComponent,
  OpenDialogIconButtonComponent
} from './components';

@NgModule({
  declarations: [
    ContentAddFormComponent,
    ContentHeaderComponent,
    ContentSearchFormComponent,
    ContentSearchResultTableComponent,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
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
    ContentAddFormComponent,
    ContentHeaderComponent,
    ContentSearchFormComponent,
    ContentSearchResultTableComponent,
    CustomIconButtonComponent,
    OpenDialogIconButtonComponent
  ]
})
export class SharedModule {}
