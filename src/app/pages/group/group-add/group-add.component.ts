import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.styl']
})
export class GroupAddComponent implements OnInit {
  addForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {}
}
