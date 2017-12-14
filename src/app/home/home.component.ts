import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy();
    $('#mensagem').trigger('autoresize');

    $('.card').hover(function () {
      $(this).removeClass('z-depth-4');
      $(this).addClass('z-depth-5');
    }, function(){
      $(this).removeClass('z-depth-5');
      $(this).addClass('z-depth-4');
    });
  }
}
