import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services';
import { Router } from '@angular/router';

export interface Menu {
  link: string;
  label: string;
}

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.styl']
})
export class ContentLayoutComponent implements OnInit {
  menus: Menu[] = [
    { link: '/company/search', label: 'Company Search' },
    { link: '/company/add', label: 'Company Add' },
    { link: '/group/search', label: 'Group Search' },
    { link: '/group/add', label: 'Group Add' },
    { link: '/member/search', label: 'Member Search' },
    { link: '/member/add', label: 'Member Add' },
    { link: '/user/search', label: 'User Search' },
    { link: '/user/add', label: 'User Add' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.authService
      .logout()
      .subscribe(
        _ => this.router.navigateByUrl('/'),
        error => console.log(`onError: ${error}`)
      );
  }
}
