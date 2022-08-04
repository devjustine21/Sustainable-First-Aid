import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyServicesPageRoutingModule } from './emergency-services-routing.module';

import { EmergencyServicesPage } from './emergency-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyServicesPageRoutingModule
  ],
  declarations: [EmergencyServicesPage]
})
export class EmergencyServicesPageModule {}
