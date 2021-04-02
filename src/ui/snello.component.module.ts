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
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { EditorModule } from 'primeng/editor';
import { KnobModule } from 'primeng/knob';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

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
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { FormlyFieldEditorComponent } from './editor/formly-field-editor.component';
import { PasswordComponent } from './password/password.component';
import { RatingComponent } from './rating/rating.component';
import { SelectbuttonComponent } from './selectbutton/selectbutton.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { TriStateCheckboxComponent } from './tri-state-checkbox/tri-state-checkbox.component';


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
    DropdownComponent,
    InputMaskComponent,
    InputSwitchComponent,
    TextAreaComponent,
    ListBoxComponent,
    FormlyFieldEditorComponent,
    PasswordComponent,
    RatingComponent,
    SelectbuttonComponent,
    TogglebuttonComponent,
    TriStateCheckboxComponent
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
    DropdownModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    ListboxModule,
    EditorModule,
    KnobModule,
    PasswordModule,
    DividerModule,
    RatingModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule
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
    DropdownComponent,
    InputMaskComponent,
    InputSwitchComponent,
    TextAreaComponent,
    ListBoxComponent,
    FormlyFieldEditorComponent,
    PasswordComponent,
    RatingComponent,
    TogglebuttonComponent,
    TriStateCheckboxComponent
  ]
})
export class SnelloComponentModule {
}
