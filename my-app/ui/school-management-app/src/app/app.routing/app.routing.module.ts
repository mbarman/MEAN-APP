import { AdminModule } from './../admin/admin.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../home/home-layout/home-layout.component';
import { HomeComponent } from '../home/home/home.component';
import { LoginLayoutComponent } from '../login/login-layout/login-layout.component';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../login/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'admin',
        loadChildren: '../admin/admin.module#AdminModule'
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: RegisterComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
