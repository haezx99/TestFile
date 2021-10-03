import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab10contactPageRoutingModule } from './lab10contact-routing.module';

import { Lab10contactPage } from './lab10contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab10contactPageRoutingModule
  ],
  declarations: [Lab10contactPage]
})
export class Lab10contactPageModule {}
