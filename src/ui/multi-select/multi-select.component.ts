/* tslint:disable:component-class-suffix component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'multiselect-type',
  template: `
    <p-multiSelect
      [options]="selectOptions"
      [(ngModel)]="selectedOptions" (ngModelChange)="onModelChange()"
      optionLabel="label"
      optionValue="value"></p-multiSelect>
  `,
  encapsulation: ViewEncapsulation.None
})

export class MultiSelectComponent extends FieldType implements OnInit {

  selectedOptions: [];
  selectOptions: any[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getOptions();
  }

  getOptions(): void {
    this.field.fieldGroup.forEach(element => {
      element.templateOptions.options.forEach(item => {
        this.selectOptions.push(item);
      });
    });
  }

  onModelChange(): void {
    this.field.formControl.setValue({movies: this.selectedOptions});
  }
}
