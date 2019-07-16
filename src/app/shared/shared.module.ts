import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {
  MatMomentDateModule,
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
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
    MatMomentDateModule,
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
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class SharedModule {}
