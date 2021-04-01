/* tslint:disable:component-class-suffix component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'checkbox-type',
  template: `
    <div class="p-field-checkbox">
      <p-checkbox [(ngModel)]="checked" binary="true" (ngModelChange)="onModelChange()"></p-checkbox>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})

export class FormlyFieldCheckboxComponent extends FieldType implements OnInit {
  checked: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onModelChange(): void {
    this.field.formControl.setValue(this.checked);
  }
}
