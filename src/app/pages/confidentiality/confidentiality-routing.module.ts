import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfidentialityPage } from './confidentiality.page';

const routes: Routes = [
  {
    path: '',
    component: ConfidentialityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfidentialityPageRoutingModule {}
