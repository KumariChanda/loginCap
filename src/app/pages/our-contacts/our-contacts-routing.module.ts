import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurContactsPage } from './our-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: OurContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurContactsPageRoutingModule {}
