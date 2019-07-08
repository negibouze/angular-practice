import { Component, OnInit } from '@angular/core';

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
    { link: '/user/search', label: 'User Search' },
    { link: '/user/add', label: 'User Add' }
  ];

  constructor() {}

  ngOnInit() {}
}
