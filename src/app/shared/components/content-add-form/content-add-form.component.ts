import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content-add-form',
  templateUrl: './content-add-form.component.html',
  styleUrls: ['./content-add-form.component.styl']
})
export class ContentAddFormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() submitEvent = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    this.submitEvent.emit(this.formGroup);
  }
}
