import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendRidesPage } from './send-rides.page';

const routes: Routes = [
  {
    path: '',
    component: SendRidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendRidesPageRoutingModule {}
