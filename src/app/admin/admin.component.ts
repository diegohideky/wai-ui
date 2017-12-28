import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Admin }        from './admin';
import { AdminService } from './admin.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private admin: Admin;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
  	this.admin = new Admin;
  }
}