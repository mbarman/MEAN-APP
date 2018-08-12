import { UrlService } from './../url/url.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private urlService: UrlService, private http: HttpClient) { }

  signMeIn(user: any): Observable<any> {
   // const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
   // const options: RequestOptions = new RequestOptions({ headers: headers });
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(user);

    return this.http
        .post(this.urlService.getUrl('user.login'), body, {headers} )
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }
  private extractData(res: Response) {
    //const body = res.json();
    const body = res;
    return body || {};
}

private handleError(error: any) {
    return throwError(error);
}
}
