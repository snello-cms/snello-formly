import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyFieldTabs} from './tabs/formly-field-tabs.component';
import {TabViewModule} from 'primeng/tabview';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyFieldSteps} from './steps/formly-field-steps.component';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {FormlyFieldCalendarComponent} from './calendar/formly-field-calendar.component';

@NgModule({
  declarations: [FormlyFieldTabs, FormlyFieldSteps, FormlyFieldCalendarComponent],
  exports: [FormlyFieldTabs, FormlyFieldSteps, FormlyFieldCalendarComponent],
  imports: [BrowserModule, FormsModule, FormlyModule, TabViewModule, StepsModule, CalendarModule],
})
export class SnelloComponentModule {
}
