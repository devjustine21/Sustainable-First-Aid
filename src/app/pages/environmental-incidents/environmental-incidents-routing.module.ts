import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvironmentalIncidentsPage } from './environmental-incidents.page';

const routes: Routes = [
  {
    path: '',
    component: EnvironmentalIncidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvironmentalIncidentsPageRoutingModule {}
