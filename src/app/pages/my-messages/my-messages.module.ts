import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMessagesPageRoutingModule } from './my-messages-routing.module';

import { MyMessagesPage } from './my-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMessagesPageRoutingModule
  ],
  declarations: [MyMessagesPage]
})
export class MyMessagesPageModule {}
