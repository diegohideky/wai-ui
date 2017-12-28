import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Admin }      from './admin';

@Injectable()
export class AdminService {

  constructor(
    private apiService: ApiService
  ) { }
}