import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpHandler} from '../../../../node_modules/@angular/common/http/src/backend';
@Injectable({
  providedIn: 'root'
})

/**
 * A custom http service which we can use
 * for any customization required during service call
 */
export class CustomHttpService extends HttpClient {

  constructor(private httpHandler: HttpHandler) {
    super(httpHandler);
   }
}
