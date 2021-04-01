import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-input-switch',
  template: `
    <div class="p-fluid ">
      <div class="p-field-checkbox">
        <p-inputSwitch [formControl]="formControl" [formlyAttributes]="field"></p-inputSwitch>
        <label>{{to.label}}</label>
      </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class InputSwitchComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
