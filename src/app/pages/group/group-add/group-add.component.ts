import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Group, GroupService } from '@app/services/group.service';
import { CompanyService } from '@app/services/company.service';

interface Company {
  value: number;
  label: string;
}

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.styl']
})
export class GroupAddComponent implements OnInit {
  addForm = this.fb.group({
    companyName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    representativeName: ['', [Validators.required]]
  });
  companies: Company[] = [];

  constructor(
    private fb: FormBuilder,
    private groupService: GroupService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies.map(v => {
        return {
          value: v.id,
          label: v.name
        };
      });
    });
  }

  handleSubmit() {
    const vals: Group = this.addForm.value;
    this.groupService
      .addGroup(vals)
      .subscribe(
        value => this.addForm.reset(),
        error => console.log(`onError: ${error}`),
        () => console.log('onCompleted')
      );
  }
}
