import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { UserService, User } from '@app/services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.styl']
})
export class UserSearchComponent implements OnInit {
  userSearchForm = this.fb.group({
    name: [''],
    age: [''],
    height: [''],
    weight: ['']
  });
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<User>();

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatPaginator, { static: false }) set matPaginator(
    mp: MatPaginator
  ) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {}

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  hasData(): boolean {
    if (!this.dataSource || !this.dataSource.data) return false;
    return 1 <= this.dataSource.data.length;
  }

  onSubmit() {
    this.userService.getUsers().subscribe(users => {
      const user = users[0];
      this.displayedColumns = Object.keys(user);
      this.dataSource.data = users;
    });
  }
}
