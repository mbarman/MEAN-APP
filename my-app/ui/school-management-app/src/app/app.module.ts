import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxNotificationComponent } from 'ngx-notification';

import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { LoginComponent } from './login/login/login.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from './app.routing/app.routing.module';
import { RegisterComponent } from './login/register/register.component';
import { HttpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    LoginComponent,
    HomeLayoutComponent,
    HomeComponent,
    RegisterComponent,
    NgxNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
