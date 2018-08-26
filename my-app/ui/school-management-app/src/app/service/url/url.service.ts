import { WindowService } from './../window.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private window: WindowService) { }

  private urlObject: Object = {
    'admin.register': '/api/admin/register',
    'user.login': '/api/admin/login',
    'admin.upload': '/api/admin/upload'
  };

  private getBaseUrl(): string {
    return this.window.nativeWindow.location.protocol + '//' + this.window.nativeWindow.location.host;
  }

  public getUrl(key): string {
   let _url = '';
   _url = this.getBaseUrl() + this.urlObject[key];
    return _url;
  }
}
