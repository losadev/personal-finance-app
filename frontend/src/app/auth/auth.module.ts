import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { AuthLoginComponent } from '../components/auth-login/auth-login.component';
import { AuthRegisterComponent } from '../components/auth-register/auth-register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AuthLoginComponent },
      { path: 'register', component: AuthRegisterComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AuthLayoutComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
