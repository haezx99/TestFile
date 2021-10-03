import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab10contactPage } from './lab10contact.page';

const routes: Routes = [
  {
    path: '',
    component: Lab10contactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab10contactPageRoutingModule {}
