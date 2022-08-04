import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyServicesPage } from './emergency-services.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyServicesPageRoutingModule {}
