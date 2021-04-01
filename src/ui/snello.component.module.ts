import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { BrowserModule } from '@angular/platform-browser';

// primeng modules
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';

// custom components
import { FormlyFieldSteps } from './steps/formly-field-steps.component';
import { FormlyFieldCalendarComponent } from './calendar/formly-field-calendar.component';
import { FormlyFieldAutoCompleteComponent } from './auto.complete/formly-field-auto-complete.component';
import { FormlyFieldColorPickerComponent } from './color-picker/formly-field-color-picker.component';
import { FormlyFieldListComponent } from './formly-field-list/formly-field-list.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormlyFieldCheckboxComponent } from './checkbox/formly-field-checkbox.component';
import { FormlyFieldTabs } from './tabs/formly-field-tabs.component';
import { FormlyFieldChipsComponent } from './chips/formly-field-chips.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    FormlyFieldAutoCompleteComponent,
    FormlyFieldTabs,
    FormlyFieldSteps,
    FormlyFieldCalendarComponent,
    FormlyFieldColorPickerComponent,
    FormlyFieldListComponent,
    MultiSelectComponent,
    FormlyFieldCheckboxComponent,
    FormlyFieldChipsComponent,
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
    CheckboxModule,
    ChipsModule,
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
    FormlyFieldCheckboxComponent,
    FormlyFieldChipsComponent,
    CascadeSelectComponent,
    DropdownComponent
  ]
})
export class SnelloComponentModule {
}
