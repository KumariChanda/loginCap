import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermUsagePage } from './term-usage.page';

const routes: Routes = [
  {
    path: '',
    component: TermUsagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermUsagePageRoutingModule {}
