import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'calendar-type',
  template: `
    <p-calendar
      [defaultDate]="to.defaultDate"
      [dateFormat]="to.dateFormat"
      [hourFormat]="to.hourFormat"
      [showTime]="to.showTime"
      [showIcon]="to.showIcon"
      [showButtonBar]="to.showButtonBar"
      [showOtherMonths]="to.showOtherMonths"
      [selectOtherMonths]="to.selectOtherMonths"
      [selectionMode]="to.selectionMode || 'single'"
      [numberOfMonths]="to.numberOfMonths || 1"
      [formControl]="formControl" [formlyAttributes]="field">
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldCalendarComponent extends FieldType {
}
