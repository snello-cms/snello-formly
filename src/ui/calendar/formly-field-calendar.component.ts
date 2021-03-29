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
      [numberOfMonths]="to.numberOfMonths"
      [inline]="to.inline"
      [readonlyInput]="to.readonlyInput"
      [touchUI]="to.touchUI"
      [monthNavigator]="to.monthNavigator"
      [yearNavigator]="to.yearNavigator"
      [yearRange]="to.yearRange"
      [placeholder]="to.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCalendarComponent extends FieldType {
}
