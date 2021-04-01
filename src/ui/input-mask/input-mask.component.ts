import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-input-mask',
  template: `
    <div class="p-fluid">
    <div class="p-field">
      <label>{{to.label}}</label>
      <p-inputMask
       [mask]="!!to.mask ? to.mask : ''"
       [placeholder]="to.placeholder"
       [slotChar]="!!to.slotChar ? to.slotChar : ''"
       [characterPattern]="!!to.characterPattern ? to.characterPattern : ''"
       [formControl]="formControl" [formlyAttributes]="field"></p-inputMask>
      </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class InputMaskComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
