import { Injectable } from '@angular/core';
import { School }     from './school';

import { ApiService } from '../api/api.service';
import { CepService } from '../api/cep.service';

@Injectable()
export class SchoolService {

  constructor(
    private apiService: ApiService,
    private cepService: CepService
  ) { }

  findAll(): Promise<any> {
    return this.apiService.findSchools();
  }

  insert(school: School): Promise<any> {
    const params = {
      name: school.name,
      idh: school.idh,
      students: school.students,
      postalCode: school.postalCode,
      address: school.address,
      number: school.number,
      complement: school.complement,
      neighborhood: school.neighborhood,
      city: school.city,
      state: school.state,
      country: school.country,
      lat: school.lat,
      lng: school.lng
    };
    return this.apiService.insertSchool(params);
  }

  update(school: School): Promise<any> {
    const params = {
      _id: school._id,
      name: school.name,
      idh: school.idh,
      students: school.students,
      postalCode: school.postalCode,
      address: school.address,
      number: school.number,
      complement: school.complement,
      neighborhood: school.neighborhood,
      city: school.city,
      state: school.state,
      country: school.country,
      lat: school.lat,
      lng: school.lng
    };
    return this.apiService.updateSchool(params);
  }

  remove(school: School): Promise<any> {
    const params = {
      _id: school._id
    }
    return this.apiService.removeSchool(params);
  }

  searchPostalCode(postalCode: number): Promise<any> {
    return this.cepService.getAddressByPostalCode(postalCode);
  }

  buildParams(school: School): object {
    let params = {
      name: school.name,
      idh: school.idh,
      students: school.students,
      postalCode: school.postalCode,
      address: school.address,
      number: school.number,
      complement: school.complement,
      neighborhood: school.neighborhood,
      city: school.city,
      state: school.state,
      country: school.country,
      lat: school.lat,
      lng: school.lng
    };

    // if (school._id !== 'undefined' && school._id !== null) {
    //   params._id = school.id;
    // }

    return params;
  }


}
