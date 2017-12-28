import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Signin }            from './signin';
import { SigninService }     from './signin.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private signin: Signin;

  constructor(
    private signinService: SigninService,
    private router: Router
  ) {}

  submitForm(): void {
    console.log(this.signin);
    this.signinService.submit(this.signin)
      .then(data => {
        console.log(data);
        // if (data.user && data.user.role === 'ADMIN') {
        //   this.router.navigateByUrl('/admin');
        // } else if (data.user && data.user.role === 'USER') {
        //   this.router.navigateByUrl('/user');
        // } else {
        //   console.log(data);
        // }
      });
  }

  ngOnInit(): void {
    this.signin = new Signin;
  }
}
