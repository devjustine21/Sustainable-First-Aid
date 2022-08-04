import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPRPage } from './cpr.page';

const routes: Routes = [
  {
    path: '',
    component: CPRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPRPageRoutingModule {}
