import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventiveMeasuresPageRoutingModule } from './preventive-measures-routing.module';

import { PreventiveMeasuresPage } from './preventive-measures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventiveMeasuresPageRoutingModule
  ],
  declarations: [PreventiveMeasuresPage]
})
export class PreventiveMeasuresPageModule {}
