import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomiquePage } from './economique.page';

const routes: Routes = [
  {
    path: '',
    component: EconomiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomiquePageRoutingModule {}
