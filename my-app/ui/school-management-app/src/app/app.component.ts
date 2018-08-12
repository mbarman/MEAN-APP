import { Component } from '@angular/core';
import { Spinkit } from '../../node_modules/ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public spinkit = Spinkit;
}
