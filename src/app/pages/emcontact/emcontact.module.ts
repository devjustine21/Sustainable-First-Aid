import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmcontactPageRoutingModule } from './emcontact-routing.module';

import { EmcontactPage } from './emcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmcontactPageRoutingModule
  ],
  declarations: [EmcontactPage]
})
export class EmcontactPageModule {}
