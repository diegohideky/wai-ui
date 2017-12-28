import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Signin }     from './signin';

@Injectable()
export class SigninService {

  constructor(
    private apiService: ApiService
  ) { }

  submit(signin: Signin): Promise<any> {
    const params = {
      name: signin.name,
      email: signin.email,
      password: signin.password,
      passwordRepeated: signin.passwordRepeated,
      role: 'USER',
      active: true
    };
    return this.apiService.signIn(params);
  }
}
