import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
  }

  getCountries(search: any): any {
    return this.http.get<any>('assets/countries.json')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => {
        return data;
      });
  }
}
