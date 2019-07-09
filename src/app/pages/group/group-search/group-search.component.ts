import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.styl']
})
export class GroupSearchComponent implements OnInit {
  groupSearchForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {}
}
