import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonIncidentsPageRoutingModule } from './common-incidents-routing.module';

import { CommonIncidentsPage } from './common-incidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonIncidentsPageRoutingModule
  ],
  declarations: [CommonIncidentsPage]
})
export class CommonIncidentsPageModule {}
