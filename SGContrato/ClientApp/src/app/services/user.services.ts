import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthUser, AuthUserInterface } from '../model.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  _user:AuthUser;
  _isLoggedIn: boolean;

  constructor(private _cookieService: CookieService, private _http: HttpClient) {
    this._isLoggedIn = false;
  }
  
  isLoggedIn(): boolean {
    if (this._cookieService.check(environment.AppCookieName)) {
      let str: string = this._cookieService.get(environment.AppCookieName);
      this._isLoggedIn = true;
    }
    return this._isLoggedIn;
  }


  set_isLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }

  setUserLoggedIn(user: AuthUser) {
    this._user = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getUser(): Observable<AuthUser> {
    if (this._isLoggedIn && this._user)
    {
      return of(this._user);    }                 
    return this._http.get<AuthUserInterface>('/api/login/getUser');
  }
}
