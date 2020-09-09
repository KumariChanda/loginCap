import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendReportsPageRoutingModule } from './send-reports-routing.module';

import { SendReportsPage } from './send-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendReportsPageRoutingModule
  ],
  declarations: [SendReportsPage]
})
export class SendReportsPageModule {}
