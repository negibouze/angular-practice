import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.styl']
})
export class CompanySearchComponent implements OnInit {
  companySearchForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {}
}
