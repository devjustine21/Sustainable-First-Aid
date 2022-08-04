import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvironmentalIncidentsPageRoutingModule } from './environmental-incidents-routing.module';

import { EnvironmentalIncidentsPage } from './environmental-incidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvironmentalIncidentsPageRoutingModule
  ],
  declarations: [EnvironmentalIncidentsPage]
})
export class EnvironmentalIncidentsPageModule {}
