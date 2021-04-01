import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'calendar-type',
  template: `
    <p-calendar
      [defaultDate]="!!to.defaultDate ? to.defaultDate : null"
      [dateFormat]="!!to.dateFormat ? to.dateFormat: 'mm/dd/yy'"
      [hourFormat]="!!to.hourFormat ? to.hourFormat : '24'"
      [showTime]="!!to.showTime ? to.hourFormat : false"
      [showIcon]="!!to.showIcon ? to.showIcon : false"
      [showButtonBar]="!!to.showButtonBar ? to.showButtonBar : false"
      [showOtherMonths]="!!to.showOtherMonths ? to.showOtherMonths : false"
      [selectOtherMonths]="!!to.selectOtherMonths ? to.selectOtherMonths : false"
      [selectionMode]="!!to.selectionMode ? to.selectionMode : 'single'"
      [numberOfMonths]="!!to.numberOfMonths ? to.numberOfMonths : '1'"
      [formControl]="formControl" [formlyAttributes]="field">
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldCalendarComponent extends FieldType {
}
