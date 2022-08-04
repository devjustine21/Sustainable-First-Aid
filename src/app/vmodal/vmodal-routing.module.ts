import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VmodalPage } from './vmodal.page';

const routes: Routes = [
  {
    path: '',
    component: VmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VmodalPageRoutingModule {}
