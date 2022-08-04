import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VmodalPageRoutingModule } from './vmodal-routing.module';

import { VmodalPage } from './vmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VmodalPageRoutingModule
  ],
  declarations: [VmodalPage]
})
export class VmodalPageModule {}
