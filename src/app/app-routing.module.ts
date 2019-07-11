import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/guards';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NoauthGuard } from './guards/noauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'company',
        loadChildren: () =>
          import('./pages/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'group',
        loadChildren: () =>
          import('./pages/group/group.module').then(m => m.GroupModule)
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./pages/member/member.module').then(m => m.MemberModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then(m => m.UserModule)
      }
    ]
  },
  {
    path: 'login',
    canActivate: [NoauthGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
