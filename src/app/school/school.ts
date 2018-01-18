import { Attribute } from './attribute';

export class School {
  _id: string;
  name: string;
  idh: number;
  students: number;
  postalCode: number;
  address: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  attributes: Attribute[];  
}
