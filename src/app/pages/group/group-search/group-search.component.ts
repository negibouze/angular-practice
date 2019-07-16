import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService, Group } from '@app/services/group.service';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.styl']
})
export class GroupSearchComponent implements OnInit {
  formItems = [
    { key: 'name', label: 'Name', controlConfig: [''] },
    { key: 'email', label: 'E-mail', controlConfig: ['', Validators.email] },
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
  data: Group[];

  constructor(private fb: FormBuilder, private groupService: GroupService) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {
    this.groupService.getGroups().subscribe(groups => {
      const group = groups[0];
      this.displayedColumns = Object.keys(group);
      this.data = groups;
    });
  }
}
