import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OutletComponent} from './commons/outlet.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ListComponent} from './components/list/list.component';
import {ViewComponent} from './components/view/view.component';
import {EditComponent} from './components/edit/edit.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: '',
    component: OutletComponent,
    children: [
      {path: 'list', component: ListComponent },
      {path: 'view/:id', component: ViewComponent },
      {path: 'edit/:id', component: EditComponent },
      {path: 'edit', component: EditComponent },
      {path: 'new', component: EditComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
