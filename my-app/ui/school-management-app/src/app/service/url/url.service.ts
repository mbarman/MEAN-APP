import { WindowService } from './../window.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private window: WindowService) { }

  private urlObject: Object = {
    admin : {
      register: '/api/admin/register'
    },
    user : {
      login: '/api/user/login'
    }
  };

  private getBaseUrl(): string {
    return this.window.nativeWindow.location.protocol + '//' + this.window.nativeWindow.location.host;
  }

  public getUrl(key): string {
   let _url = '';
  /*  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result += p + " , " + obj[p] + "\n";
    }
  }
  return result; */
   _url = this.getBaseUrl() + this.urlObject.admin.register;
   console.log(_url);
    return _url;
  }
}
