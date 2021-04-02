import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'autocomplete-type',
  template: `
  <div class="p-fluid">
    <div class="p-field">
      <label>{{to.label}}</label>
        <p-autoComplete 
        [formControl]="formControl"
        [formlyAttributes]="field"
        [field]="to.field || ''"
        [minLength]="to.minLength || 1"
        [suggestions]="results"
        [dropdown]="!!to.dropdown"
        [multiple]="!!to.multiple"
        (completeMethod)="search($event)">
      </p-autoComplete>
      </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldAutoCompleteComponent extends FieldType {

  results: string[];

  constructor(private httpClient: HttpClient) {
    super();
  }

  search(event): void {
    if (this.to.remoteurl) {
      this.httpClient.get<string[]>(this.to.remoteurl + event.query).subscribe(data => {
        this.results = data;
      });
    } else if (this.to.options) {
      this.results = this.to.options as any[];
    } else {
      this.results = [];
    }
  }
}

