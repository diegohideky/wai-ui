import { Injectable }                    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private host = 'http://localhost:3000';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) { }

  findUsers(): Promise<any> {
    const url = this.host + '/api/users';
    return this.http
      .get(url, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  findContracts(): Promise<any> {
    const url = this.host + '/api/contracts';
    return this.http
      .get(url, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  insertContract(params: object): Promise<any> {
    const url = this.host + '/api/contract';
    return this.http
      .post(url, params, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  updateContract(params: object): Promise<any> {
    const url = this.host + '/api/contract';
    return this.http
      .put(url, params, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  removeContract(params: object): Promise<any> {
    const url = this.host + '/api/contract';
    return this.http
      .delete(url, new RequestOptions({
        headers: this.headers,
        body: params
      }))
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  logIn(params: object): Promise<any> {
    const url = this.host + '/api/login';
    return this.http
      .post(url, params, this.headers)
      .toPromise()
      .then(response => response)
      .catch(error => this.handleError(error));
  }

  signIn(params: object): Promise<any> {
    const url = this.host + '/api/signin';
    return this.http
      .post(url, params, this.headers)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  logOut(): Promise<any> {
    const url = this.host + '/api/logout';
    return this.http
      .get(url, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
}

