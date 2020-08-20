import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyClassPage } from './family-class.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyClassPageRoutingModule {}
