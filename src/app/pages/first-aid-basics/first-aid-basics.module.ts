import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstAidBasicsPageRoutingModule } from './first-aid-basics-routing.module';

import { FirstAidBasicsPage } from './first-aid-basics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstAidBasicsPageRoutingModule
  ],
  declarations: [FirstAidBasicsPage]
})
export class FirstAidBasicsPageModule {}
