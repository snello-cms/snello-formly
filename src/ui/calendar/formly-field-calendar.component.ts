import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'calendar-type',
  template: `
    <div class="p-fluid">
      <div class="p-field">
        <label >{{to.label}}</label>
          <p-calendar
          [defaultDate]="to.defaultDate || null"
          [dateFormat]="to.dateFormat || 'mm/dd/yy'"
          [hourFormat]="to.hourFormat || '24'"
          [showTime]="!!to.hourFormat"
          [showIcon]="!!to.showIcon"
          [showButtonBar]="!!to.showButtonBar"
          [showOtherMonths]="!!to.showOtherMonths"
          [selectOtherMonths]="!!to.selectOtherMonths"
          [selectionMode]="to.selectionMode || 'single'"
          [numberOfMonths]="to.numberOfMonths || '1'"
          [formControl]="formControl" [formlyAttributes]="field">
        </p-calendar>
        </div>
    </div>
    
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormlyFieldCalendarComponent extends FieldType {
}
