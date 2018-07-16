import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from '../../service/register/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private userService: RegisterUserService) { }
  public userName: string;
  public userEmail: string;
  public userCategory: string;
  public userId: string;
  public userPassword: string;

  ngOnInit() {
  }

  registerMe() {
    let  user: any = {};
    user.name = this.userName;
    user.email = this.userEmail;
    user.category = this.userCategory;
    user.userId = this.userId;
    user.password = this.userPassword;

    this.userService.register(user).subscribe(
      (response) => this.handleSuccess(response),
      (error) => this.handleError(error)
    );

  }

  private handleSuccess(response: any) {
    this.signMeUp();
  }

  private handleError(error: any) {
    console.log(error);
    alert(error);
  }

  private signMeUp() {
    this._router.navigate(['/login']);
  }

}
