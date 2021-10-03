import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArraybuttonPage } from './arraybutton.page';

const routes: Routes = [
  {
    path: '',
    component: ArraybuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArraybuttonPageRoutingModule {}
