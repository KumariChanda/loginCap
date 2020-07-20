import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarFleetPageRoutingModule } from './car-fleet-routing.module';

import { CarFleetPage } from './car-fleet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarFleetPageRoutingModule
  ],
  declarations: [CarFleetPage]
})
export class CarFleetPageModule {}
