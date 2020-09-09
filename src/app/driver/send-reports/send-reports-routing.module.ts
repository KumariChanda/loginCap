import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendReportsPage } from './send-reports.page';

const routes: Routes = [
  {
    path: '',
    component: SendReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendReportsPageRoutingModule {}
