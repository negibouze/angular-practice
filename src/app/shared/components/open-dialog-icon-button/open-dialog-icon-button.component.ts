import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-open-dialog-icon-button',
  templateUrl: './open-dialog-icon-button.component.html',
  styleUrls: ['./open-dialog-icon-button.component.styl']
})
export class OpenDialogIconButtonComponent {
  // mat-icon size
  @Input() iconSize;

  @ViewChild('dialogTemplate', { static: true })
  dialogTemplate: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(this.dialogTemplate);

    dialogRef.afterClosed().subscribe(result => {});
  }
}
