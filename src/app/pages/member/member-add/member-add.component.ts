import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MemberService, Member } from '@app/services/member.service';
import { GroupService } from '@app/services/group.service';

export class MemberAddErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

interface Group {
  value: number;
  label: string;
}

interface Age {
  value: number;
  label: string;
}

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.styl']
})
export class MemberAddComponent implements OnInit {
  addForm = this.fb.group({
    groupName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    age: [''],
    height: [''],
    weight: ['']
  });

  groups: Group[] = [];

  ages: Age[] = Array.from(Array(30).keys())
    .map(v => {
      const val = v + 20;
      return { value: val, label: val.toString() };
    })
    .reduce((acc, v) => acc.concat(v), []);

  matcher = new MemberAddErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups.map(v => {
        return {
          value: v.id,
          label: v.name
        };
      });
    });
  }

  handleSubmit() {
    const vals: Member = this.addForm.value;
    this.memberService
      .addMember(vals)
      .subscribe(
        value => this.addForm.reset(),
        error => console.log(`onError: ${error}`),
        () => console.log('onCompleted')
      );
  }
}
