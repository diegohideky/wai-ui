import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User }              from './user';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;

  constructor(
    // private Service: SigninService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = new User;
  }
}


