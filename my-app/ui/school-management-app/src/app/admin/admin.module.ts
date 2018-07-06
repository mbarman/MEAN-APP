import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, AddStudentComponent, AdminHomeComponent]
})
export class AdminModule { }
