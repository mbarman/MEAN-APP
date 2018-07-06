import { AddStudentComponent } from './../components/add-student/add-student.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { AdminHomeComponent } from './../components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children : [
      { path: '', component: DashboardComponent},
      { path: 'students', component: AddStudentComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
