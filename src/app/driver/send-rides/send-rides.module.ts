import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendRidesPageRoutingModule } from './send-rides-routing.module';

import { SendRidesPage } from './send-rides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendRidesPageRoutingModule
  ],
  declarations: [SendRidesPage]
})
export class SendRidesPageModule {}
