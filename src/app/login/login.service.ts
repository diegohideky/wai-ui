import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Login }      from './login';

@Injectable()
export class LoginService {

  constructor(
    private apiService: ApiService
  ) { }

  submit(login: Login): Promise<any> {
    const params = {
      email: login.email,
      password: login.password,
      remember: login.remember
    };
    return this.apiService.logIn(params);
  }
  logOut(): Promise<any> {
    return this.apiService.logOut();
  }
}
