import { Injectable } from '@angular/core';
// import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';
import { UrlService } from '../url/url.service';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private urlService: UrlService, private http: HttpClient) { }

  register(user: any): Observable<any> {
   /*  const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    const options: RequestOptions = new RequestOptions({ headers: headers }); */
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(user);

    return this.http
        .post(this.urlService.getUrl('admin.register'), body, {headers} )
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }


  private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    private handleError(error: any) {
        return throwError(error);
    }
}
