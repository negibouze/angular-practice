import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.styl']
})
export class CompanyAddComponent implements OnInit {
  addForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {}
}
