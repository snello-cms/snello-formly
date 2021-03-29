import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  get(model: string): any {
    return this.http.get<{ firstName: string, lastName: string }>('assets/json-powered/' + model);
  }

  getUserData(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields()]);
  }

  getUser(): any {
    return this.http.get<{ firstName: string, lastName: string }>('assets/json-powered/user.json');
  }

  getFields(): any {
    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/user-form.json');
  }

  getColors(): any {
    return this.http.get<{ label: string; value: string }[]>('assets/json-powered/colors.json');
  }
}
