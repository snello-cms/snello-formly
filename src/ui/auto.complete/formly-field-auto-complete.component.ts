import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'autocomplete-type',
  template: `
    <p-autoComplete
      [formControl]="formControl" [formlyAttributes]="field"
      [suggestions]="to.suggestions" (completeMethod)="search($event)"></p-autoComplete>

  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldAutoCompleteComponent extends FieldType {

  results: string[];

  constructor(private httpClient: HttpClient) {
    super();
  }

  search(event): void {
    this.httpClient.get<string[]>(this.to.remoteurl + event.query).subscribe(data => {
      this.results = data;
    });
  }
}

