import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'colorpicker-type',
  template: `
  <div class="p-fluid">
    <div class="p-field-checkbox">
        <p-colorPicker [formControl]="formControl" [formlyAttributes]="field"></p-colorPicker>
        <label >{{to.label}}</label>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldColorPickerComponent extends FieldType {
}

