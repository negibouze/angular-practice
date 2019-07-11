import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MemberService, Member } from '@app/services/member.service';

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

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.styl']
})
export class MemberAddComponent implements OnInit {
  addForm = this.fb.group({
    name: ['', [Validators.required]],
    age: [''],
    height: [''],
    weight: ['']
  });
  selectedValue: string;
  selectedCar: string;

  ages = Array.from(Array(30).keys())
    .map(v => {
      const val = v + 20;
      return { value: val, label: val };
    })
    .reduce((acc, v) => acc.concat(v), []);

  matcher = new MemberAddErrorStateMatcher();

  constructor(private fb: FormBuilder, private memberService: MemberService) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {
    const vals: Member = this.addForm.value;
    this.memberService.addMember(vals).subscribe();
  }
}
