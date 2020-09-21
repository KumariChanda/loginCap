import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportClientPage } from './report-client.page';

const routes: Routes = [
  {
    path: '',
    component: ReportClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportClientPageRoutingModule {}
