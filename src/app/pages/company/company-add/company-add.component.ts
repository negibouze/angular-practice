import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Company, CompanyService } from '@app/services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.styl']
})
export class CompanyAddComponent implements OnInit {
  addForm = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    applicationDate: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService
  ) {}

  ngOnInit() {}

  handleSubmit() {
    const vals: Company = this.addForm.value;
    this.companyService
      .addCompany(vals)
      .subscribe(
        value => this.addForm.reset(),
        error => console.log(`onError: ${error}`),
        () => console.log('onCompleted')
      );
  }
}
