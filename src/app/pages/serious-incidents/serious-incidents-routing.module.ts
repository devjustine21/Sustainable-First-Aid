import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriousIncidentsPage } from './serious-incidents.page';

const routes: Routes = [
  {
    path: '',
    component: SeriousIncidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriousIncidentsPageRoutingModule {}
