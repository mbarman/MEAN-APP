import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { UrlService } from '../url/url.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private urlService: UrlService, private http: HttpClient) { }


  upload(files, parameters) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers.set('params', parameters);
    return  this.http.post(this.urlService.getUrl('admin.upload') , files, {headers})
             .pipe(map(this.extractData))
             .pipe(catchError(this.handleError));

}
/* getImages(){
    return this.http.get(this._baseURL + "getimages")
               .map(response => response.json())
               .catch(error => Observable.throw(error));
} */

private extractData(res: Response) {
  const body = res;
  return body || {};
}

private handleError(error: any) {
  return throwError(error);
}
}
