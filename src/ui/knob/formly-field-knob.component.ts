/* tslint:disable:component-class-suffix component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'knob-type',
  template: `
    <p-knob [(ngModel)]="value" (ngModelChange)="onModelChange()"></p-knob>`,
  encapsulation: ViewEncapsulation.None
})

export class FormlyFieldKnobComponent extends FieldType implements OnInit {
  value = 20;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onModelChange(): void {
    this.field.formControl.setValue(this.value);
  }
}
