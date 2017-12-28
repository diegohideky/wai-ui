import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Login } from './login';
import { LoginService } from './login.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: Login;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  submitForm(): void {
    this.loginService.submit(this.login)
      .then(res => {
        if (res.status === 200) {
          let data = res.json();

          if (data.user && data.user.role === 'ADMIN') {
            this.router.navigateByUrl('/admin');
          } else if (data.user && data.user.role === 'USER') {
            this.router.navigateByUrl('/user');
          }
        } else {
          console.log('Houve algum erro');
        }
      });
  }

  ngOnInit(): void {
    this.login = new Login;
  }
}
