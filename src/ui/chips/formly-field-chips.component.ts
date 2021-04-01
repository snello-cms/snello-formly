/* tslint:disable:component-class-suffix component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'chips-type',
  template: `
    <p-chips [(ngModel)]="chipsList" separator="," (ngModelChange)="onModelChange()"></p-chips>
  `,
  encapsulation: ViewEncapsulation.None
})

export class FormlyFieldChipsComponent extends FieldType implements OnInit {
  chipsList: string[];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onModelChange(): void {
    this.field.formControl.setValue(this.chipsList);
  }
}
