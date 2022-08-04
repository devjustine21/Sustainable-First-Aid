import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmcontactPage } from './emcontact.page';

const routes: Routes = [
  {
    path: '',
    component: EmcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmcontactPageRoutingModule {}
