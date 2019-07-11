import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  hide = true;
  nextUrl = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => (this.nextUrl = params.returnUrl || 'user')
    );
  }

  onSubmit() {
    const vals = this.loginForm.value;
    this.authService
      .login({
        username: vals.email,
        password: vals.password
      })
      .subscribe(
        _ => this.router.navigateByUrl(this.nextUrl),
        error => console.log(`onError: ${error}`)
      );
  }
}
