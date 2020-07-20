import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMessagesPage } from './my-messages.page';

const routes: Routes = [
  {
    path: '',
    component: MyMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMessagesPageRoutingModule {}
