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
// import { HttpModule } from '../../node_modules/@angular/http';
import {HttpClientModule } from '../../node_modules/@angular/common/http';
import { NgHttpLoaderModule } from '../../node_modules/ng-http-loader';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './home/menu/menu/menu.component';
// import { FileSelectDirective } from '../../node_modules/ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    LoginComponent,
    HomeLayoutComponent,
    HomeComponent,
    RegisterComponent,
    NgxNotificationComponent,
    MenuComponent
    // FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    MaterialModule
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
