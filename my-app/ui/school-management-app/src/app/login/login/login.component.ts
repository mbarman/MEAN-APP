import { NgxNotificationService } from 'ngx-notification';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private userService: LoginService,
    private ngxNotificationService: NgxNotificationService) { }

  public userId: string;
  public userPassword: string;

  ngOnInit() {
  }

  logMeIn() {
   this._router.navigate(['/']);
  }

}
