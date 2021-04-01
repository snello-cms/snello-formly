import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTabs } from './tabs/formly-field-tabs.component';
import { TabViewModule } from 'primeng/tabview';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyFieldSteps } from './steps/formly-field-steps.component';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { FormlyFieldCalendarComponent } from './calendar/formly-field-calendar.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlyFieldAutoCompleteComponent } from './auto.complete/formly-field-auto-complete.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormlyFieldColorPickerComponent } from './color-picker/formly-field-color-picker.component';
import { CardModule } from 'primeng/card';
import { FormlyFieldListComponent } from './formly-field-list/formly-field-list.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    FormlyFieldAutoCompleteComponent,
    FormlyFieldTabs,
    FormlyFieldSteps,
    FormlyFieldCalendarComponent,
    FormlyFieldColorPickerComponent,
    FormlyFieldListComponent,
    MultiSelectComponent,
    CascadeSelectComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormlyModule,
    TabViewModule,
    StepsModule,
    CalendarModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ColorPickerModule,
    CardModule,
    MultiSelectModule,
    CascadeSelectModule,
    DropdownModule
  ],
  exports: [
    FormlyFieldAutoCompleteComponent,
    FormlyFieldTabs,
    FormlyFieldSteps,
    FormlyFieldCalendarComponent,
    FormlyFieldColorPickerComponent,
    FormlyFieldListComponent,
    MultiSelectComponent,
    CascadeSelectComponent,
    DropdownComponent
  ]
})
export class SnelloComponentModule {
}
