import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Signup }     from './signup';

@Injectable()
export class SignupService {

  constructor(
    private apiService: ApiService
  ) { }

  submit(signup: Signup): Promise<any> {
    const params = {
      name: signup.name,
      email: signup.email,
      password: signup.password,
      passwordRepeated: signup.passwordRepeated,
      role: 'USER',
      active: true
    };
    return this.apiService.signIn(params);
  }
}
