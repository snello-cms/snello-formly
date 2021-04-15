import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-list',
  template: `
    <p-listbox [options]="cities" [(ngModel)]="selectedCity"
               optionLabel="name" [style]="{'width':'15rem'}" (ngModelChange)="onModelChange()"></p-listbox>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FormlyFieldListComponent extends FieldType implements OnInit {

  cities: any[];
  selectedCity: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  onModelChange(): void {
    this.field.formControl.setValue(this.selectedCity);
  }
}
