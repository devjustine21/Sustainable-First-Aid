import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriousIncidentsPageRoutingModule } from './serious-incidents-routing.module';

import { SeriousIncidentsPage } from './serious-incidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriousIncidentsPageRoutingModule
  ],
  declarations: [SeriousIncidentsPage]
})
export class SeriousIncidentsPageModule {}
