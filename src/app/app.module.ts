import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SnelloComponentModule } from '../ui/snello.component.module';
import { CardModule } from 'primeng/card';

// components
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OutletComponent } from './commons/outlet.component';

// custom field types
import { FormlyFieldTabs } from '../ui/tabs/formly-field-tabs.component';
import { FormlyFieldSteps } from '../ui/steps/formly-field-steps.component';
import { FormlyFieldCalendarComponent } from '../ui/calendar/formly-field-calendar.component';
import { FormlyFieldAutoCompleteComponent } from '../ui/auto.complete/formly-field-auto-complete.component';
import { FormlyFieldColorPickerComponent } from '../ui/color-picker/formly-field-color-picker.component';
import { FormlyFieldListComponent } from '../ui/formly-field-list/formly-field-list.component';
import { MultiSelectComponent } from '../ui/multi-select/multi-select.component';
import { FormlyFieldCheckboxComponent } from '../ui/checkbox/formly-field-checkbox.component';
import { FormlyFieldChipsComponent } from '../ui/chips/formly-field-chips.component';
import { CascadeSelectComponent } from 'src/ui/cascade-select/cascade-select.component';
import { DropdownComponent } from 'src/ui/dropdown/dropdown.component';
import { InputMaskComponent } from 'src/ui/input-mask/input-mask.component';
import { InputSwitchComponent } from 'src/ui/input-switch/input-switch.component';
import { TextAreaComponent } from 'src/ui/text-area/text-area.component';
import { ListBoxComponent } from 'src/ui/list-box/list-box.component';
import { FormlyFieldEditorComponent } from '../ui/editor/formly-field-editor.component';
import { FormlyFieldKnobComponent } from '../ui/knob/formly-field-knob.component';
import { PasswordComponent } from 'src/ui/password/password.component';
import { RatingComponent } from 'src/ui/rating/rating.component';
import { SelectbuttonComponent } from 'src/ui/selectbutton/selectbutton.component';
import { TogglebuttonComponent } from 'src/ui/togglebutton/togglebutton.component';
import { TriStateCheckboxComponent } from 'src/ui/tri-state-checkbox/tri-state-checkbox.component';

// environment
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    HomePageComponent,
    ListComponent,
    OutletComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    AutoCompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'tabs', component: FormlyFieldTabs },
        { name: 'steps', component: FormlyFieldSteps },
        { name: 'list', component: FormlyFieldListComponent },
        { name: 'calendar', component: FormlyFieldCalendarComponent },
        { name: 'autocomplete', component: FormlyFieldAutoCompleteComponent },
        { name: 'colopicker', component: FormlyFieldColorPickerComponent },
        { name: 'multi-select', component: MultiSelectComponent },
        { name: 'cascadeselect', component: CascadeSelectComponent },
        { name: 'dropdown', component: DropdownComponent },
        { name: 'checkbox', component: FormlyFieldCheckboxComponent },
        { name: 'chips', component: FormlyFieldChipsComponent },
        { name: 'inputmask', component: InputMaskComponent },
        { name: 'inputswitch', component: InputSwitchComponent },
        { name: 'textarea', component: TextAreaComponent },
        { name: 'listbox', component: ListBoxComponent },
        { name: 'editor', component: FormlyFieldEditorComponent },
        { name: 'knob', component: FormlyFieldKnobComponent },
        { name: 'password', component: PasswordComponent },
        { name: 'rating', component: RatingComponent },
        { name: 'selectbutton', component: SelectbuttonComponent },
        { name: 'togglebutton', component: TogglebuttonComponent },
        { name: 'tristatecheck', component: TriStateCheckboxComponent }
      ]
    }),
    FormsModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    OverlayModule,
    CardModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SidebarModule,
    SnelloComponentModule
  ]
})
export class AppModule {
}
