import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarFleetPage } from './car-fleet.page';

const routes: Routes = [
  {
    path: '',
    component: CarFleetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarFleetPageRoutingModule {}
