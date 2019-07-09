import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.styl']
})
export class CompanyAddComponent implements OnInit {
  companyAddForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {}
}
