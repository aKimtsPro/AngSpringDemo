import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { LoginForm } from '../models/login-form.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly JWT_TOKEN_KEY = "jwt";

  constructor(private _client: HttpClient) { }

  public login(form: LoginForm, observer?: Partial<Observer<any>> | undefined) {
    const obs = this._client.post<any>("http://localhost:8080/login", form);
    obs.subscribe({
      next: value => {
        sessionStorage.setItem( this.JWT_TOKEN_KEY, value.token )
        if(observer && observer.next)
          observer.next(value)
      },
      error: error => {
        if(observer && observer.error)
          observer.error(console.error())
      },
      complete: () => {
        if(observer && observer.complete)
          observer.complete()
      }
    })
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.JWT_TOKEN_KEY);
  }

  isLogged(): boolean{
    return this.getToken() ? true : false;
  }

  isLoggedRequest(): Observable<boolean> {
    return this._client.get<boolean>("http://localhost:8080/is-logged", {
      headers: this.getAuthHeader()
    })
  }

  logOut(){
    sessionStorage.removeItem(this.JWT_TOKEN_KEY);
  }

  getAuthHeader(): { [key:string]:string } {
    const token = this.getToken();
    return token ? { "Authorization": token } : {}
  }

}
