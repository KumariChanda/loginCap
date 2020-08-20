import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuvClassPage } from './suv-class.page';

const routes: Routes = [
  {
    path: '',
    component: SuvClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuvClassPageRoutingModule {}
