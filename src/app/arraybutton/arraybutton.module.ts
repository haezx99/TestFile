import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArraybuttonPageRoutingModule } from './arraybutton-routing.module';

import { ArraybuttonPage } from './arraybutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArraybuttonPageRoutingModule
  ],
  declarations: [ArraybuttonPage]
})
export class ArraybuttonPageModule {}
