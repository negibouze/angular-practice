import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService, Company } from '@app/services/company.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.styl']
})
export class CompanySearchComponent implements OnInit {
  formItems = [
    { key: 'name', label: 'Name', controlConfig: [''] },
    { key: 'address', label: 'Address', controlConfig: [''] },
    { key: 'tel', label: 'Tel', controlConfig: [''] }
  ];
  searchForm = this.fb.group(
    this.formItems
      .map(v => {
        return { [v.key]: v.controlConfig };
      })
      .reduce((acc, v) => {
        return { ...acc, ...v };
      }, {})
  );

  displayedColumns: string[];
  data: Company[];

  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {
    this.companyService.getCompanies().subscribe(companies => {
      const company = companies[0];
      this.displayedColumns = Object.keys(company);
      this.data = companies;
    });
  }
}
