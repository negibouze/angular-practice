import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberService, Member } from '@app/services/member.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.styl']
})
export class MemberSearchComponent implements OnInit {
  formItems = [
    { key: 'name', label: 'Name', controlConfig: [''] },
    { key: 'age', label: 'Age', controlConfig: [''] },
    { key: 'height', label: 'Height', controlConfig: [''] },
    { key: 'weight', label: 'Weight', controlConfig: [''] }
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
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Member>();

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

  constructor(private memberService: MemberService, private fb: FormBuilder) {}

  ngOnInit() {}

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  hasData(): boolean {
    if (!this.dataSource || !this.dataSource.data) return false;
    return 1 <= this.dataSource.data.length;
  }

  handleSubmit(fb: FormGroup) {
    this.memberService.getMembers().subscribe(members => {
      const member = members[0];
      this.displayedColumns = Object.keys(member);
      this.dataSource.data = members;
    });
  }
}
