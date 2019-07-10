import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content-search-form',
  templateUrl: './content-search-form.component.html',
  styleUrls: ['./content-search-form.component.styl']
})
export class ContentSearchFormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() submitEvent = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    this.submitEvent.emit(this.formGroup);
  }
}
