import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendFeedbacksPageRoutingModule } from './send-feedbacks-routing.module';

import { SendFeedbacksPage } from './send-feedbacks.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendFeedbacksPageRoutingModule,
    TranslateModule
  ],
  declarations: [SendFeedbacksPage]
})
export class SendFeedbacksPageModule {}
