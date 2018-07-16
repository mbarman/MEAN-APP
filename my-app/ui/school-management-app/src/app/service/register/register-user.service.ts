import { Injectable } from '@angular/core';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private urlService: UrlService, private http: Http) { }

  register(user: any): Observable<any> {
    const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    const body = JSON.stringify(user);

    return this.http
        .post(this.urlService.getUrl('admin.register'), body, options )
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }


  private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        return throwError(error);
    }
}
