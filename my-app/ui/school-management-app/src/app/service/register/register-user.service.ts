import { Injectable } from '@angular/core';
import { WindowService } from '../window.service';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private wService: WindowService, private http: Http) { }
}
