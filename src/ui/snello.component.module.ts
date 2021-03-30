import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyFieldTabs} from './tabs/formly-field-tabs.component';
import {TabViewModule} from 'primeng/tabview';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyFieldSteps} from './steps/formly-field-steps.component';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {FormlyFieldCalendarComponent} from './calendar/formly-field-calendar.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormlyFieldAutoCompleteComponent} from './auto.complete/formly-field-auto-complete.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import {FormlyFieldColorPickerComponent} from './color-picker/formly-field-color-picker.component';

@NgModule({
  declarations: [FormlyFieldAutoCompleteComponent, FormlyFieldTabs, FormlyFieldSteps,
    FormlyFieldCalendarComponent, FormlyFieldColorPickerComponent],
  exports: [FormlyFieldAutoCompleteComponent, FormlyFieldTabs, FormlyFieldSteps,
    FormlyFieldCalendarComponent, FormlyFieldColorPickerComponent],
  imports: [BrowserModule, FormsModule, FormlyModule, TabViewModule, StepsModule,
    CalendarModule, ReactiveFormsModule, AutoCompleteModule, ColorPickerModule],
})
export class SnelloComponentModule {
}
