import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPRPageRoutingModule } from './cpr-routing.module';

import { CPRPage } from './cpr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPRPageRoutingModule
  ],
  declarations: [CPRPage]
})
export class CPRPageModule {}
