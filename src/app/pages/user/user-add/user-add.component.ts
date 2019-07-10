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
import { UserService, User } from '@app/services/user.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class UserAddErrorStateMatcher implements ErrorStateMatcher {
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
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.styl']
})
export class UserAddComponent implements OnInit {
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

  matcher = new UserAddErrorStateMatcher();

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {}

  handleSubmit(fb: FormGroup) {
    const vals: User = this.addForm.value;
    this.userService.addUser(vals).subscribe();
  }
}
