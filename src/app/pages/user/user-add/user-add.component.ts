import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
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
  formGroup = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  hide = true;

  matcher = new UserAddErrorStateMatcher();

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {}

  handleSubmit() {
    const vals: User = this.formGroup.value;
    this.userService
      .addUser(vals)
      .subscribe(
        _ => this.formGroup.reset(),
        error => console.log(`onError: ${error}`)
      );
  }
}
