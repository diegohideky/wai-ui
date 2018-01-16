import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Signup }            from './signup';
import { SignupService }     from './signup.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signup: Signup;

  constructor(
    private signupService: SignupService,
    private router: Router
  ) {}

  submitForm(): void {
    console.log(this.signup);
    this.signupService.submit(this.signup)
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
    this.signup = new Signup;
  }
}
