import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeetingsPage } from './seetings.page';

const routes: Routes = [
  {
    path: '',
    component: SeetingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeetingsPageRoutingModule {}
