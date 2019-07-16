import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[];
  data: Member[];

  constructor(private fb: FormBuilder, private memberService: MemberService) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {
    this.memberService.getMembers().subscribe(members => {
      const member = members[0];
      this.displayedColumns = Object.keys(member);
      this.data = members;
    });
  }
}
