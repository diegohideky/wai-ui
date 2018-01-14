import { Injectable }                    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private host = 'http://viacep.com.br';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) { }

  getAddressByPostalCode(postalCode: number): Promise<any> {
    const url = this.host + '/ws/' + postalCode + '/json';
    return this.http
      .get(url, this.headers)
      .toPromise()
      .then(response => response)
      .catch(error => this.handleError(error));
  }

}
