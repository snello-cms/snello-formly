import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ViewComponent} from './components/view/view.component';
import {EditComponent} from './components/edit/edit.component';
import {ListComponent} from './components/list/list.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {OutletComponent} from './commons/outlet.component';
import {SidebarModule} from 'primeng/sidebar';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {SnelloComponentModule} from '../ui/snello.component.module';
import {FormlyFieldTabs} from '../ui/tabs/formly-field-tabs.component';
import {FormlyFieldSteps} from '../ui/steps/formly-field-steps.component';
import {FormlyFieldCalendarComponent} from '../ui/calendar/formly-field-calendar.component';

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
        {name: 'tabs', component: FormlyFieldTabs},
        {name: 'steps', component: FormlyFieldSteps},
        {name: 'calendar', component: FormlyFieldCalendarComponent},
        ]
    }),
    FormsModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    OverlayModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    SidebarModule,
    SnelloComponentModule
  ]
})
export class AppModule {
}
