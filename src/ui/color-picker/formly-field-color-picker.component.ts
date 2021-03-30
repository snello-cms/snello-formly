import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'colorpicker-type',
  template: `
    <p-colorPicker [formControl]="formControl" [formlyAttributes]="field"></p-colorPicker>

  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldColorPickerComponent extends FieldType {
}

