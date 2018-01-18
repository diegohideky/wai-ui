import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { School }            from './school';
import { SchoolService }     from './school.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  private school: School;
  private schools: School[];
  private message: string;

  constructor(
    private schoolService: SchoolService,
    private router: Router
  ) { }

  submitForm(): void {
    if (!this.school.hasOwnProperty('_id')) {
      this.schoolService.insert(this.school)
        .then(res => {
          if (res.status === 200) {
            let data = res.json();

            this.schools.push(data.school);
            this.school = new School;
            this.school.country = 'Brasil';

            this.message = data.message;
          } else {
            console.log('Houve algum erro');
          }
        });
    } else {
      this.schoolService.update(this.school)
        .then(res => {
          if (res.status === 200) {
            let data = res.json();

            let school = this.schools.find(school => school._id === this.school._id);
            let index = this.schools.indexOf(school);

            this.schools[index] = data.school;
            this.school = new School;
            this.school.country = 'Brasil';

            this.message = data.message;
          } else {
            console.log('Houve algum erro ao editar escola');
          }
        });
    }

  }

  edit(school: School): void {
    this.school = Object.assign({}, school);
  }

  remove(school: School): void {
    this.schoolService.remove(school)
      .then(res => {
        if (res.status === 200) {
          let data = res.json();

          let index = this.schools.indexOf(school);
          this.schools.splice(index, 1);

          this.message = data.message;
        } else {
          console.log('Não foi possível remover escola');
        }
      });
  }

  cancel(): void {
    this.school = new School;
  }

  searchPostalCode(): void {
    this.schoolService.searchPostalCode(this.school.postalCode)
      .then(res => {
        if (res.status === 200) {
          let data = res.json();

          this.school.address = data.logradouro;
          this.school.neighborhood = data.bairro;
          this.school.city = data.localidade;
          this.school.state = data.uf;
        } else {
          console.log('houve erro para encontrar cep');
        }
      });
  }

  ngOnInit() {
    this.schools = [];
    this.school = new School;

    this.school.country = 'Brasil';

    this.schoolService.findAll()
      .then(res => {
        if (res.status === 200) {
          let data = res.json();

          this.message = data.menssage;
          this.schools = data.schools;
        } else {
          console.log('Não foi possível carregar escolas');
        }
      });
  }

}
