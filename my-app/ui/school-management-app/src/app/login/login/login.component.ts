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
    const  user: any = {};
    user.userId = this.userId;
    user.password = this.userPassword;

    this.userService.signMeIn(user).subscribe(
      (response) => this.handleSuccess(response),
      (error) => this.handleError(error)
    );
  }

  private handleSuccess(response: any) {
    if (response.status === 201) {
      this.logIn();
    }
     else {
      this.ngxNotificationService.sendMessage(response.message, 'danger', 'bottom-right');
    }
  }

  private handleError(error: any) {
    alert(error);
  }


  private logIn(){
    this._router.navigate(['/']);
  }

}
