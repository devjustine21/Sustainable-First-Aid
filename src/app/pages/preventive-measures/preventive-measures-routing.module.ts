import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventiveMeasuresPage } from './preventive-measures.page';

const routes: Routes = [
  {
    path: '',
    component: PreventiveMeasuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventiveMeasuresPageRoutingModule {}
