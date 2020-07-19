import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendFeedbacksPage } from './send-feedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: SendFeedbacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendFeedbacksPageRoutingModule {}
