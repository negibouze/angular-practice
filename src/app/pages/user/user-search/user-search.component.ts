import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService, User } from '@app/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.styl']
})
export class UserSearchComponent implements OnInit {
  formItems = [
    { key: 'name', label: 'Name', controlConfig: [''] },
    { key: 'mail', label: 'Mail', controlConfig: [''] }
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
  data: User[];

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {
    this.userService.getUsers().subscribe(users => {
      const user = users[0];
      this.displayedColumns = Object.keys(user);
      this.data = users;
    });
  }
}
